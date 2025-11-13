import {
  Controller,
  Get,
  UseGuards,
  Post,
  Req,
  NotFoundException,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';
import { AnimeService } from './anime.service';
import { Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { Request } from 'express';
import { OptionalJwtAuthGuard } from 'src/auth/optional-jwt-auth.guard';

interface JwtRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

@Controller('animes')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @UseGuards(OptionalJwtAuthGuard)
  @Get()
  async getAllAnimes(@Req() req: JwtRequest) {
    console.log('GET /animes called');
    console.log('User in request:', req.user);
    const animes = await this.animeService.findAll();
    const userId = req.user ? BigInt(req.user.id) : null;

    const result = await Promise.all(
      animes.map(async (anime) => ({
        ...anime,
        id: anime.id.toString(),
        isFavorite: userId
          ? !!(await this.animeService.isFavorite(userId, anime.id))
          : false,
      })),
    );

    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get('in-progress')
  async getInProgress(@Req() req: JwtRequest) {
    if (!req.user?.id) {
      throw new UnauthorizedException('Utilisateur non authentifié');
    }

    const userId = BigInt(req.user.id);
    return this.animeService.getInProgress(userId);
  }

  @Get('latest')
  async getLatestAnimes() {
    const animes = await this.animeService.getTenLastAnimes();

    return animes.map((anime) => ({
      ...anime,
      id: anime.id.toString(),
    }));
  }

  @UseGuards(JwtAuthGuard)
  @Get('favorites')
  async getUserFavorites(@Req() req: JwtRequest) {
    if (!req.user || !req.user.id) {
      throw new NotFoundException('User not authenticated');
    }
    const userId = BigInt(req.user.id);
    const favorites = await this.animeService.getUserFavorites(userId);

    return favorites.map((fav) => ({
      ...fav.anime,
      id: fav.anime.id.toString(),
    }));
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get(':id')
  async getAnimeById(@Param('id') id: string, @Req() req: JwtRequest) {
    const anime = await this.animeService.findById(BigInt(id));
    const userId = req.user ? BigInt(req.user.id) : null;
    const isFav = userId
      ? !!(await this.animeService.isFavorite(userId, anime.id))
      : false;
    return {
      ...anime,
      id: anime.id.toString(),
      isFavorite: isFav,
    };
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get(':id/episodes')
  async getAllEpisodes(@Param('id') id: string, @Req() req: JwtRequest) {
    const userId = req.user ? BigInt(req.user.id) : undefined;
    return this.animeService.getAllEpisodes(BigInt(id), userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/favorites')
  async addToFavorites(@Param('id') animeId: string, @Req() req: JwtRequest) {
    if (!req.user || !req.user.id) {
      throw new NotFoundException('User not authenticated');
    }

    const userId = BigInt(req.user.id);
    const animeIdBig = BigInt(animeId);

    await this.animeService.addToFavorites(userId, animeIdBig);

    return {
      user_id: userId.toString(),
      anime_id: animeIdBig.toString(),
      message: 'Favorite added successfully !',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/favorites')
  async removeFromFavorites(
    @Param('id') animeId: string,
    @Req() req: JwtRequest,
  ) {
    if (!req.user || !req.user.id) {
      throw new NotFoundException('User not authenticated');
    }

    const userId = BigInt(req.user.id);
    const animeIdBig = BigInt(animeId);

    await this.animeService.removeFromFavorites(userId, animeIdBig);

    return {
      user_id: userId.toString(),
      anime_id: animeIdBig.toString(),
      message: 'Favorite removed successfully !',
    };
  }
}
