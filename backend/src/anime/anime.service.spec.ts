import { Test, TestingModule } from '@nestjs/testing';
import { AnimeService } from './anime.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

const mockPrismaService = {
  anime: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
  },
  favorite: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
  },
  episode: {
    findMany: jest.fn(),
  },
};

type AnimeDto = {
  id: bigint;
  name: string;
  name_japanese: string;
  image_url: string;
  description: string;
  total_episodes: number;
};

describe('AnimeService', () => {
  let service: AnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimeService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<AnimeService>(AnimeService);
    jest.clearAllMocks();
  });

  it('doit être créé', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('doit retourner une liste d’animes', async () => {
      const fauxAnimes = [
        { id: 1n, name: 'One Piece', image_url: 'img.jpg' },
        { id: 2n, name: 'Attack on Titan', image_url: 'img2.jpg' },
      ];

      mockPrismaService.anime.findMany.mockResolvedValue(fauxAnimes);

      const resultat = await service.findAll();

      expect(resultat).toHaveLength(2);
      expect(resultat[0].name).toBe('One Piece');
      expect(mockPrismaService.anime.findMany).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('doit retourner un anime quand il existe', async () => {
      const naruto = { id: 5n, name: 'Naruto', description: 'Ninja' };

      mockPrismaService.anime.findUnique.mockResolvedValue(naruto);

      const resultat = await service.findById(5n);

      expect(resultat.name).toBe('Naruto');
      expect(mockPrismaService.anime.findUnique).toHaveBeenCalledWith({
        where: { id: 5n },
      });
    });

    it('doit lancer une erreur 404 si l’anime n’existe pas', async () => {
      mockPrismaService.anime.findUnique.mockResolvedValue(null);

      await expect(service.findById(999n)).rejects.toThrow(NotFoundException);
      await expect(service.findById(999n)).rejects.toThrow(
        'Anime with id 999 not found',
      );
    });
  });

  describe('isFavorite', () => {
    it('isFavorite doit retourner true si l’utilisateur a mis en favori', async () => {
      const favorite = { user_id: 1n, anime_id: 3n };
      mockPrismaService.favorite.findUnique.mockResolvedValue(favorite);
      const resultat = await service.isFavorite(1n, 3n);
      expect(resultat).toBe(true);
      expect(mockPrismaService.favorite.findUnique).toHaveBeenCalledWith({
        where: { user_id_anime_id: { user_id: 1n, anime_id: 3n } },
      });
    });
    it("doit retourner false si l'anime n'a pas été ajouté en favori", async () => {
      mockPrismaService.favorite.findUnique.mockResolvedValue(null);
      expect(await service.isFavorite(99n, 999n)).toBe(false);
    });
  });

  describe('addToFavorites', () => {
    const userId = 42n;
    const animeId = 100n;
    const anime = { id: animeId, name: 'Jujutsu Kaisen' };

    beforeEach(() => {
      mockPrismaService.anime.findUnique.mockResolvedValue(anime);
    });

    it('doit créer un nouveau favori', async () => {
      const nouveauFavori = { user_id: userId, anime_id: animeId };
      mockPrismaService.favorite.create.mockResolvedValue(nouveauFavori);

      const resultat = await service.addToFavorites(userId, animeId);

      expect(resultat).toEqual(nouveauFavori);
      expect(mockPrismaService.favorite.create).toHaveBeenCalledWith({
        data: { user_id: userId, anime_id: animeId },
      });
    });

    it('retourne le favori si il est déjà présent', async () => {
      const favorite = { user_id: userId, anime_id: animeId };
      mockPrismaService.favorite.create.mockRejectedValue({ code: 'P2002' });
      mockPrismaService.favorite.findUnique.mockResolvedValue(favorite);
      const resultat = await service.addToFavorites(userId, animeId);
      expect(resultat).toEqual(favorite);
      expect(mockPrismaService.favorite.create).toHaveBeenCalledTimes(1);
      expect(mockPrismaService.favorite.findUnique).toHaveBeenCalledWith({
        where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
      });
    });

    it("si l'anime n'existe pas", async () => {
      mockPrismaService.anime.findUnique.mockResolvedValue(null);
      await expect(service.addToFavorites(userId, animeId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getTenLastAnimes', () => {
    it('Doit retourner les 10 derniers animés', async () => {
      const animes = [
        { id: 24n, name: 'Gachiakuta', created_at: new Date('2025-01-24') },
        { id: 23n, name: 'Monster', created_at: new Date('2025-01-23') },
        {
          id: 22n,
          name: 'My Hero Academia',
          created_at: new Date('2025-01-22'),
        },
        { id: 21n, name: 'Death Note', created_at: new Date('2025-01-21') },
        { id: 20n, name: 'Orb', created_at: new Date('2025-01-20') },
        {
          id: 19n,
          name: 'Attack on Titan',
          created_at: new Date('2025-01-19'),
        },
        { id: 18n, name: 'One Piece', created_at: new Date('2025-01-18') },
        { id: 17n, name: 'Naruto', created_at: new Date('2025-01-17') },
        { id: 16n, name: 'Fairy Tail', created_at: new Date('2025-01-16') },
        { id: 15n, name: 'Splatoon', created_at: new Date('2025-01-15') },
      ];

      mockPrismaService.anime.findMany.mockResolvedValue(animes);
      const resultat = await service.getTenLastAnimes();
      expect(resultat).toHaveLength(10);
      expect(mockPrismaService.anime.findMany).toHaveBeenCalledWith({
        orderBy: { created_at: 'desc' },
        take: 10,
      });
    });

    it('Doit retourner moins de 10 animés si moins de 10 animés existent', async () => {
      const animes = [
        { id: 23n, name: 'Monster' },
        { id: 24n, name: 'Gachiakuta' },
      ];
      mockPrismaService.anime.findMany.mockResolvedValue(animes);
      const resultat = await service.getTenLastAnimes();
      expect(resultat).toHaveLength(2);
    });
  });

  describe('getUserFavorites', () => {
    const userId = 777n;
    it("Doit retourner les animés favoris de l'utilisateur", async () => {
      const favorites = [
        {
          anime: {
            id: 1n,
            name: 'One Piece',
            name_japanese: 'ワンピース',
            image_url: 'https://example.com/op.jpg',
            description: 'Les pirates du chapeau de paille',
            total_episodes: 1100,
          },
        },
        {
          anime: {
            id: 2n,
            name: 'Attack on Titan',
            name_japanese: '進撃の巨人',
            image_url: 'https://example.com/aot.jpg',
            description: 'Des gros titans qui mangent les gens',
            total_episodes: 89,
          },
        },
      ];
      mockPrismaService.favorite.findMany.mockResolvedValue(favorites);
      const resultat = (await service.getUserFavorites(userId)).map(
        (f) => f.anime,
      ) as AnimeDto[];
      expect(resultat).toHaveLength(2);
      expect(resultat[0]).toEqual({
        id: 1n,
        name: 'One Piece',
        name_japanese: 'ワンピース',
        image_url: 'https://example.com/op.jpg',
        description: 'Les pirates du chapeau de paille',
        total_episodes: 1100,
      });
      expect(resultat[1].id).toBe(2n);
      expect(mockPrismaService.favorite.findMany).toHaveBeenCalledWith({
        where: { user_id: userId },
        include: { anime: true },
      });
    });
  });

  describe('getCompleted', () => {
    it("Doit retourner les animés complétés par l'utilisateur", async () => {
      const userId = 1n;
      const completedAnimes = [
        {
          id: 1n,
          name: 'One Piece',
          name_japanese: 'ワンピース',
          image_url: 'img1.jpg',
          total_episodes: 1000,
        },
        {
          id: 2n,
          name: 'Naruto',
          name_japanese: 'ナルト',
          image_url: 'img2.jpg',
          total_episodes: 720,
        },
      ];

      mockPrismaService.anime.findMany.mockResolvedValue(completedAnimes);

      const result = await service.getCompleted(userId);

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        id: '1',
        name: 'One Piece',
        name_japanese: 'ワンピース',
        image_url: 'img1.jpg',
        totalEpisodes: 1000,
      });
      expect(result[1].id).toBe('2');

      expect(mockPrismaService.anime.findMany).toHaveBeenCalledWith({
        where: {
          user_status: {
            some: {
              user_id: userId,
              status: 'COMPLETED',
            },
          },
        },
      });
    });
  });

  describe('getAllEpisodes', () => {
    it("doit retourner tous les épisodes d'un animé", async () => {
      const animeId = 10n;

      mockPrismaService.anime.findUnique.mockResolvedValueOnce({ id: animeId });

      const episodesFromDb = [
        {
          id: 1n,
          number: 1,
          title: 'To You, in 2000 Years: The Fall of Shiganshina, Part 1',
          anime_id: animeId,
          user_progression: [],
        },
        {
          id: 2n,
          number: 2,
          title: 'That Day',
          anime_id: animeId,
          user_progression: [],
        },
      ];

      mockPrismaService.episode.findMany.mockResolvedValueOnce(episodesFromDb);

      const resultat = await service.getAllEpisodes(animeId);

      expect(resultat).toHaveLength(2);
      expect(resultat[0]).toEqual({
        id: '1',
        number: 1,
        title: 'To You, in 2000 Years: The Fall of Shiganshina, Part 1',
        anime_id: '10',
        seen: false,
      });
      expect(resultat[1]).toEqual({
        id: '2',
        number: 2,
        title: 'That Day',
        anime_id: '10',
        seen: false,
      });
    });

    it("doit lancer NotFoundException si l'anime n'existe pas", async () => {
      const animeId = 999n;

      mockPrismaService.episode.findMany.mockResolvedValueOnce([]);

      const resultat = await service.getAllEpisodes(animeId);

      expect(resultat).toEqual([]);
    });
  });
  describe('getInProgress', () => {
    it('Doit retourner les animés en cours de visionnage avec la progression et le statut favori', async () => {
      const userId = 1n;
      const animesInProgress = [
        {
          id: 1n,
          name: 'One Piece',
          name_japanese: 'ワンピース',
          image_url: 'img1.jpg',
          description: 'Pirates',
          episodes: [{ number: 1050 }],
        },
        {
          id: 2n,
          name: 'Naruto',
          name_japanese: 'ナルト',
          image_url: 'img2.jpg',
          description: 'Ninjas',
          episodes: [],
        },
      ];

      mockPrismaService.anime.findMany.mockResolvedValue(animesInProgress);

      mockPrismaService.favorite.findUnique.mockImplementation(
        (args: { where: { user_id_anime_id: { anime_id: bigint } } }) => {
          const { where } = args;
          if (
            where.user_id_anime_id &&
            where.user_id_anime_id.anime_id === 1n
          ) {
            return Promise.resolve({ user_id: userId, anime_id: 1n });
          }
          return Promise.resolve(null);
        },
      );

      const result = await service.getInProgress(userId);

      expect(result).toHaveLength(2);

      expect(result[0]).toEqual({
        id: '1',
        name: 'One Piece',
        name_japanese: 'ワンピース',
        image_url: 'img1.jpg',
        description: 'Pirates',
        lastSeenEpisode: 1050,
        isFavorite: true,
      });

      expect(result[1]).toEqual({
        id: '2',
        name: 'Naruto',
        name_japanese: 'ナルト',
        image_url: 'img2.jpg',
        description: 'Ninjas',
        lastSeenEpisode: 0,
        isFavorite: false,
      });

      expect(mockPrismaService.anime.findMany).toHaveBeenCalledWith({
        where: {
          user_status: {
            some: {
              user_id: userId,
              status: 'WATCHING',
            },
          },
        },
        include: {
          episodes: {
            where: {
              user_progression: { some: { user_id: userId, seen: true } },
            },
            select: { number: true },
            orderBy: { number: 'desc' },
            take: 1,
          },
        },
      });
    });
  });
});
