import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesService } from './episodes.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

const mockPrismaService = {
  episode: {
    findUnique: jest.fn(),
    count: jest.fn(),
  },
  user_episode_progression: {
    findUnique: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    count: jest.fn(),
  },
  user_anime_status: {
    deleteMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    create: jest.fn(),
  },
};

describe('EpisodesService', () => {
  let service: EpisodesService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EpisodesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<EpisodesService>(EpisodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('episodeAddWatched', () => {
    const userId = 42n;
    const episodeId = 100n;
    const animeId = 10n;

    it('doit marquer un épisode comme vu et créer le statut WATCHING si premier épisode', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue({
        id: episodeId,
        anime_id: animeId,
        anime: {
          id: animeId,
          total_episodes: 24,
        },
      });

      mockPrismaService.user_episode_progression.findUnique.mockResolvedValue(
        null,
      );

      mockPrismaService.user_episode_progression.create.mockResolvedValue({
        user_id: userId,
        episode_id: episodeId,
        seen: true,
      });

      mockPrismaService.user_episode_progression.count.mockResolvedValue(1);

      mockPrismaService.episode.count.mockResolvedValue(24);

      mockPrismaService.user_anime_status.findFirst.mockResolvedValue(null);
      mockPrismaService.user_anime_status.create.mockResolvedValue({
        user_id: userId,
        anime_id: animeId,
        status: 'WATCHING',
      });

      const result = await service.episodeAddWatched(userId, episodeId);

      expect(result).toEqual({ message: 'Episode marked as watched' });

      expect(
        mockPrismaService.user_episode_progression.create,
      ).toHaveBeenCalledWith({
        data: {
          user_id: userId,
          episode_id: episodeId,
          seen: true,
        },
      });

      expect(mockPrismaService.user_anime_status.create).toHaveBeenCalledWith({
        data: {
          user_id: userId,
          anime_id: animeId,
          status: 'WATCHING',
        },
      });
    });

    it('doit lancer NotFoundException si épisode inexistant', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue(null);

      await expect(
        service.episodeAddWatched(userId, episodeId),
      ).rejects.toThrow(NotFoundException);

      await expect(
        service.episodeAddWatched(userId, episodeId),
      ).rejects.toThrow(`Episode not found at id: ${episodeId}`);
    });

    it('doit retourner "already marked" si déjà vu', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue({
        id: episodeId,
        anime_id: animeId,
        anime: { total_episodes: 24 },
      });

      mockPrismaService.user_episode_progression.findUnique.mockResolvedValue({
        user_id: userId,
        episode_id: episodeId,
        seen: true,
      });

      const result = await service.episodeAddWatched(userId, episodeId);

      expect(result).toEqual({ message: 'Episode already marked as watched' });
      expect(
        mockPrismaService.user_episode_progression.create,
      ).not.toHaveBeenCalled();
    });
    it('doit passer le statut à COMPLETED si tous les épisodes sont vus', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue({
        id: episodeId,
        anime_id: animeId,
        anime: { total_episodes: 24 },
      });

      mockPrismaService.user_episode_progression.findUnique.mockResolvedValue(
        null,
      );
      mockPrismaService.user_episode_progression.create.mockResolvedValue({
        user_id: userId,
        episode_id: episodeId,
        seen: true,
      });

      mockPrismaService.user_episode_progression.count.mockResolvedValue(24);
      mockPrismaService.episode.count.mockResolvedValue(24);

      mockPrismaService.user_anime_status.findFirst.mockResolvedValue({
        id: 1n,
        status: 'WATCHING',
      });

      const result = await service.episodeAddWatched(userId, episodeId);

      expect(result).toEqual({ message: 'Episode marked as watched' });

      expect(mockPrismaService.user_anime_status.update).toHaveBeenCalledWith({
        where: { id: 1n },
        data: { status: 'COMPLETED' },
      });
    });

    it('doit mettre à jour le statut à WATCHING si le statut existe déjà', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue({
        id: episodeId,
        anime_id: animeId,
        anime: { total_episodes: 24 },
      });

      mockPrismaService.user_episode_progression.findUnique.mockResolvedValue(
        null,
      );
      mockPrismaService.user_episode_progression.create.mockResolvedValue({
        user_id: userId,
        episode_id: episodeId,
        seen: true,
      });

      mockPrismaService.user_episode_progression.count.mockResolvedValue(2);
      mockPrismaService.episode.count.mockResolvedValue(24);

      mockPrismaService.user_anime_status.findFirst.mockResolvedValue({
        id: 1n,
        status: 'WATCHING',
      });

      const result = await service.episodeAddWatched(userId, episodeId);

      expect(result).toEqual({ message: 'Episode marked as watched' });

      expect(mockPrismaService.user_anime_status.update).toHaveBeenCalledWith({
        where: { id: 1n },
        data: { status: 'WATCHING' },
      });
    });
  });

  describe('episodeDelWatched', () => {
    const userId = 42n;
    const episodeId = 100n;
    const animeId = 10n;

    it('doit marquer un épisode comme non vu', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue({
        id: episodeId,
        anime_id: animeId,
        anime: { total_episodes: 24 },
      });

      mockPrismaService.user_episode_progression.findUnique.mockResolvedValue({
        user_id: userId,
        episode_id: episodeId,
      });

      mockPrismaService.user_episode_progression.delete.mockResolvedValue({
        user_id: userId,
        episode_id: episodeId,
      });

      mockPrismaService.user_episode_progression.count.mockResolvedValue(5);
      mockPrismaService.episode.count.mockResolvedValue(24);

      mockPrismaService.user_anime_status.findFirst.mockResolvedValue({
        id: 1n,
        status: 'COMPLETED',
      });

      const result = await service.episodeDelWatched(userId, episodeId);

      expect(result).toEqual({ message: 'Episode marked as unwatched' });

      expect(
        mockPrismaService.user_episode_progression.delete,
      ).toHaveBeenCalledWith({
        where: {
          user_id_episode_id: { user_id: userId, episode_id: episodeId },
        },
      });

      expect(mockPrismaService.user_anime_status.update).toHaveBeenCalledWith({
        where: { id: 1n },
        data: { status: 'WATCHING' },
      });
    });

    it('doit supprimer le statut si aucun épisode vu', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue({
        id: episodeId,
        anime_id: animeId,
        anime: { total_episodes: 24 },
      });

      mockPrismaService.user_episode_progression.findUnique.mockResolvedValue({
        user_id: userId,
        episode_id: episodeId,
      });

      mockPrismaService.user_episode_progression.count.mockResolvedValue(0);
      mockPrismaService.episode.count.mockResolvedValue(24);

      await service.episodeDelWatched(userId, episodeId);

      expect(
        mockPrismaService.user_anime_status.deleteMany,
      ).toHaveBeenCalledWith({
        where: { user_id: userId, anime_id: animeId },
      });
    });

    it('doit lancer NotFoundException si épisode non trouvé', async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue(null);
      await expect(
        service.episodeDelWatched(userId, episodeId),
      ).rejects.toThrow(NotFoundException);
    });

    it("doit lancer NotFoundException si l'épisode n'était pas vu", async () => {
      mockPrismaService.episode.findUnique.mockResolvedValue({
        id: episodeId,
        anime_id: animeId,
        anime: { total_episodes: 24 },
      });
      mockPrismaService.user_episode_progression.findUnique.mockResolvedValue(
        null,
      );

      await expect(
        service.episodeDelWatched(userId, episodeId),
      ).rejects.toThrow('Episode not marked as watched');
    });
  });
});
