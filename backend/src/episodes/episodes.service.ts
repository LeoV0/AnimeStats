import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EpisodesService {
  constructor(private prisma: PrismaService) {}

  async episodeAddWatched(userId: bigint, episodeId: bigint) {
    const episode = await this.prisma.episode.findUnique({
      where: { id: episodeId },
    });
    if (!episode) {
      throw new NotFoundException(`Episode not found at id : ${episodeId}`);
    }
    const watched = await this.prisma.user_episode_progression.findUnique({
      where: { user_id_episode_id: { user_id: userId, episode_id: episodeId } },
    });

    if (watched) {
      return { message: 'Episode already marked as watched' };
    } else {
      return await this.prisma.user_episode_progression.create({
        data: { user_id: userId, episode_id: episodeId, seen: true },
      });
    }
  }

  async episodeDelWatched(userId: bigint, episodeId: bigint) {
    const episode = await this.prisma.episode.findUnique({
      where: { id: episodeId },
    });
    if (!episode) {
      throw new NotFoundException(`Episode not found at id : ${episodeId}`);
    }
    const watched = await this.prisma.user_episode_progression.findUnique({
      where: { user_id_episode_id: { user_id: userId, episode_id: episodeId } },
    });
    if (!watched) {
      throw new NotFoundException(`Episode not marked as watched`);
    }
    const deleted = await this.prisma.user_episode_progression.delete({
      where: { user_id_episode_id: { user_id: userId, episode_id: episodeId } },
    });
    return deleted;
  }
}
