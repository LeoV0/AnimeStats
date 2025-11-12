import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Anime, Episode, Favorite } from '@prisma/client';

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Anime[]> {
    return this.prisma.anime.findMany();
  }

  async isFavorite(userId: bigint, animeId: bigint): Promise<boolean> {
    const fav = await this.prisma.favorite.findUnique({
      where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
    });
    return !!fav;
  }

  async findById(id: bigint): Promise<Anime> {
    const anime = await this.prisma.anime.findUnique({ where: { id } });
    if (!anime) {
      throw new NotFoundException(`Anime with id ${id} not found`);
    }
    return anime;
  }

  getTenLastAnimes(): Promise<Anime[]> {
    return this.prisma.anime.findMany({
      orderBy: { created_at: 'desc' },
      take: 10,
    });
  }

  async getAllEpisodes(id: bigint): Promise<Episode[]> {
    const episodes = await this.prisma.episode.findMany({
      where: { anime_id: id },
      orderBy: { number: 'asc' },
    });
    if (episodes.length === 0) {
      throw new NotFoundException(`No episodes found for anime with id ${id}`);
    }
    return episodes;
  }

  async addToFavorites(userId: bigint, animeId: bigint): Promise<Favorite> {
    const anime = await this.prisma.anime.findUnique({
      where: { id: animeId },
    });
    if (!anime) throw new NotFoundException(`Anime ${animeId} not found`);

    try {
      return await this.prisma.favorite.create({
        data: { user_id: userId, anime_id: animeId },
      });
    } catch {
      const existing = await this.prisma.favorite.findUnique({
        where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
      });
      if (!existing) throw new Error('Impossible de créer le favori');
      return existing;
    }
  }

  async removeFromFavorites(
    userId: bigint,
    animeId: bigint,
  ): Promise<Favorite> {
    const anime = await this.prisma.anime.findUnique({
      where: { id: animeId },
    });
    if (!anime) {
      throw new NotFoundException(`Anime with id ${animeId} not found`);
    }
    const favorite = await this.prisma.favorite.findUnique({
      where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
    });
    if (!favorite) {
      throw new NotFoundException(`Favorite not found`);
    }
    return this.prisma.favorite.delete({
      where: { user_id_anime_id: { user_id: userId, anime_id: animeId } },
    });
  }

  async getUserFavorites(
    userId: bigint,
  ): Promise<(Favorite & { anime: Anime })[]> {
    return this.prisma.favorite.findMany({
      where: { user_id: userId },
      include: { anime: true },
    });
  }
}
