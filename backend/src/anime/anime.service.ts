import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Anime, Favorite } from '@prisma/client';

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

  async getAllEpisodes(animeId: bigint, userId?: bigint): Promise<any[]> {
    const episodes = await this.prisma.episode.findMany({
      where: { anime_id: animeId },
      orderBy: { number: 'asc' },
      include: {
        user_progression: userId
          ? {
              where: { user_id: userId },
              select: { seen: true },
            }
          : undefined,
      },
    });

    return episodes.map((ep) => ({
      id: ep.id.toString(),
      number: ep.number,
      title: ep.title,
      anime_id: ep.anime_id.toString(),
      seen: !!(ep.user_progression && ep.user_progression[0]?.seen),
    }));
  }

  async getInProgress(userId: bigint) {
    const animes = await this.prisma.anime.findMany({
      where: {
        episodes: {
          some: {
            user_progression: {
              some: { user_id: userId, seen: true },
            },
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
      take: 6,
    });

    return animes.map((a) => ({
      id: a.id.toString(),
      name: a.name,
      name_japanese: a.name_japanese,
      image_url: a.image_url,
      lastSeenEpisode: a.episodes[0]?.number || 1,
    }));
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
