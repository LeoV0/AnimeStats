import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Anime } from '@prisma/client';

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Anime[]> {
    return this.prisma.anime.findMany();
  }

  async findById(id: bigint): Promise<Anime> {
    const anime = await this.prisma.anime.findUnique({ where: { id } });
    if (!anime) {
      throw new NotFoundException(`Anime with id ${id} not found`);
    }
    return anime;
  }

  async getTenLastAnimes(): Promise<Anime[]> {
    return this.prisma.anime.findMany({
      orderBy: { created_at: 'desc' },
      take: 10,
    });
  }

  async getAllEpisodes(id: bigint) {
    const episodes = await this.prisma.episode.findMany({
      where: { anime_id: id },
      orderBy: { number: 'asc' },
    });
    if (episodes.length === 0) {
      throw new NotFoundException(`No episodes found for anime with id ${id}`);
    }
    return episodes;
  }
}
