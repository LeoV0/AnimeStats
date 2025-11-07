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

  async addToFavorites(userId: bigint, animeId: bigint) {
    const anime = await this.prisma.anime.findUnique({
      where: { id: animeId },
    });
    if (!anime) {
      throw new NotFoundException(`Anime with ${animeId} not found`);
    }
    return this.prisma.favorite.upsert({
      where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
      update: {},
      create: { user_id: userId, anime_id: animeId },
    });
  }

  async removeFromFavorites(userId: bigint, animeId: bigint) {
    const anime = await this.prisma.anime.findUnique({
      where: { id: animeId },
    });
    if (!anime) {
      throw new NotFoundException(`Anime with ${animeId} not found`);
    }
    const favorite = await this.prisma.favorite.findUnique({
      where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
    });
    if (!favorite) {
      throw new NotFoundException(`Favorite not found for this anime and user`);
    }
    const deleted = await this.prisma.favorite.delete({
      where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
    });
    return deleted;
  }
}
