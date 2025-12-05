import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserAnimeStatusEnum } from '@prisma/client';

@Injectable()
export class EpisodesService {
  constructor(private prisma: PrismaService) {}

  async episodeAddWatched(
    userId: bigint,
    episodeId: bigint,
  ): Promise<{ message: string }> {
    const episode = await this.prisma.episode.findUnique({
      where: { id: episodeId },
      include: { anime: true },
    });
    if (!episode) {
      throw new NotFoundException(`Episode not found at id: ${episodeId}`);
    }

    const existing = await this.prisma.user_episode_progression.findUnique({
      where: { user_id_episode_id: { user_id: userId, episode_id: episodeId } },
    });

    if (existing) {
      return { message: 'Episode already marked as watched' };
    }

    await this.prisma.user_episode_progression.create({
      data: { user_id: userId, episode_id: episodeId, seen: true },
    });

    await this.updateAnimeStatus(userId, episode.anime_id);

    return { message: 'Episode marked as watched' };
  }

  async episodeDelWatched(
    userId: bigint,
    episodeId: bigint,
  ): Promise<{ message: string }> {
    const episode = await this.prisma.episode.findUnique({
      where: { id: episodeId },
      include: { anime: true },
    });
    if (!episode) {
      throw new NotFoundException(`Episode not found at id: ${episodeId}`);
    }

    const watched = await this.prisma.user_episode_progression.findUnique({
      where: { user_id_episode_id: { user_id: userId, episode_id: episodeId } },
    });
    if (!watched) {
      throw new NotFoundException(`Episode not marked as watched`);
    }

    await this.prisma.user_episode_progression.delete({
      where: { user_id_episode_id: { user_id: userId, episode_id: episodeId } },
    });

    await this.updateAnimeStatus(userId, episode.anime_id);

    return { message: 'Episode marked as unwatched' };
  }

  private async updateAnimeStatus(userId: bigint, animeId: bigint) {
    const seenCount = await this.prisma.user_episode_progression.count({
      where: {
        user_id: userId,
        episode: { anime_id: animeId },
        seen: true,
      },
    });

    const availableEpisodesCount = await this.prisma.episode.count({
      where: { anime_id: animeId },
    });

    let newStatus: UserAnimeStatusEnum = UserAnimeStatusEnum.WATCHING;

    if (availableEpisodesCount > 0 && seenCount >= availableEpisodesCount) {
      newStatus = UserAnimeStatusEnum.COMPLETED;
    } else if (seenCount === 0) {
      await this.prisma.user_anime_status.deleteMany({
        where: { user_id: userId, anime_id: animeId },
      });
      return;
    }

    const existingStatus = await this.prisma.user_anime_status.findFirst({
      where: { user_id: userId, anime_id: animeId },
    });

    if (existingStatus) {
      await this.prisma.user_anime_status.update({
        where: { id: existingStatus.id },
        data: { status: newStatus },
      });
    } else {
      await this.prisma.user_anime_status.create({
        data: {
          user_id: userId,
          anime_id: animeId,
          status: newStatus,
        },
      });
    }
  }
}
