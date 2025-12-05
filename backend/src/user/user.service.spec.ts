import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

const MOCK_PASSWORD_HASH = 'hashed_password_for_testing';

const mockPrisma = {
  user: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
  },
  user_episode_progression: {
    findMany: jest.fn(),
  },
};

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findById', () => {
    it('Doit retourner un user qui existe', async () => {
      const user = {
        id: 3n,
        name: 'Léo',
        email: 'leo@gmail.com',
        password_hash: MOCK_PASSWORD_HASH,
        created_at: new Date(),
        updated_at: new Date(),
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);
      const resultat = await service.findById(3n);

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: 3n },
      });
      expect(resultat).toEqual(user);
    });
    it("Doit lancer une erreur si l'utilisateur n'existe pas", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      await expect(service.findById(999n)).rejects.toThrow(NotFoundException);
      await expect(service.findById(999n)).rejects.toThrow(
        'User with this 999 not found',
      );
    });
  });

  describe('getProgressId', () => {
    it('Doit retourner un tableau de progressions', async () => {
      const mockWatchedEpisodes = [
        {
          user_id: 3n,
          episode_id: 1n,
          seen: true,
          episode: {
            id: 1n,
            number: 1,
            anime_id: 10n,
            anime: {
              id: 10n,
              name: 'One Piece',
            },
          },
        },
        {
          user_id: 3n,
          episode_id: 2n,
          seen: true,
          episode: {
            id: 2n,
            number: 2,
            anime_id: 10n,
            anime: {
              id: 10n,
              name: 'One Piece',
            },
          },
        },
        {
          user_id: 3n,
          episode_id: 3n,
          seen: false,
          episode: {
            id: 3n,
            number: 1,
            anime_id: 20n,
            anime: {
              id: 20n,
              name: 'Naruto',
            },
          },
        },
      ];

      mockPrisma.user_episode_progression.findMany.mockResolvedValue(
        mockWatchedEpisodes,
      );

      const resultat = await service.getProgressById(3n);

      expect(mockPrisma.user_episode_progression.findMany).toHaveBeenCalledWith(
        {
          where: { user_id: 3n },
          include: { episode: { include: { anime: true } } },
        },
      );

      expect(resultat).toHaveLength(2);
      expect(resultat).toEqual([
        {
          anime_id: '10',
          anime_name: 'One Piece',
          episodes: [
            { id: '1', number: 1, seen: true },
            { id: '2', number: 2, seen: true },
          ],
        },
        {
          anime_id: '20',
          anime_name: 'Naruto',
          episodes: [{ id: '3', number: 1, seen: false }],
        },
      ]);
    });

    it('Doit retourner un tableau vide si aucune progression', async () => {
      mockPrisma.user_episode_progression.findMany.mockResolvedValue([]);

      const resultat = await service.getProgressById(3n);

      expect(resultat).toEqual([]);
    });
  });
});
