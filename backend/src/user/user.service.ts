import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

export interface EpisodeProgress {
  id: string;
  number: number;
  seen: boolean;
}

export interface AnimeProgress {
  anime_id: string;
  anime_name: string;
  episodes: EpisodeProgress[];
}

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: bigint): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with this ${id} not found`);
    }
    return user;
  }

  async getProgressById(userId: bigint): Promise<AnimeProgress[]> {
    const watchedEpisodes = await this.prisma.user_episode_progression.findMany(
      {
        where: { user_id: userId },
        include: { episode: { include: { anime: true } } },
      },
    );

    if (!watchedEpisodes.length) return [];

    const grouped: Record<string, AnimeProgress> = {};

    for (const we of watchedEpisodes) {
      const animeId = we.episode.anime.id.toString();
      if (!grouped[animeId]) {
        grouped[animeId] = {
          anime_id: animeId,
          anime_name: we.episode.anime.name,
          episodes: [],
        };
      }

      grouped[animeId].episodes.push({
        id: we.episode.id.toString(),
        number: we.episode.number,
        seen: we.seen,
      });
    }

    for (const anime of Object.values(grouped)) {
      anime.episodes.sort((a, b) => a.number - b.number);
    }

    return Object.values(grouped);
  }
}
