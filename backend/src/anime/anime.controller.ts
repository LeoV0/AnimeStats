import {
  Controller,
  Get,
  UseGuards,
  Post,
  Req,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { AnimeService } from './anime.service';
import { Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { Request } from 'express';

interface JwtRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

@Controller('animes')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  async getAllAnimes() {
    console.log('GET /animes called');
    const animes = await this.animeService.findAll();

    return animes.map((anime) => ({
      ...anime,
      id: anime.id.toString(),
    }));
  }

  @Get('latest')
  async getLatestAnimes() {
    const animes = await this.animeService.getTenLastAnimes();

    return animes.map((anime) => ({
      ...anime,
      id: anime.id.toString(),
    }));
  }

  @Get(':id')
  async getAnimeById(@Param('id') id: string) {
    const anime = await this.animeService.findById(BigInt(id));

    return {
      ...anime,
      id: anime.id.toString(),
    };
  }

  @Get(':id/episodes')
  async getAllEpisodes(@Param('id') id: string) {
    const episodes = await this.animeService.getAllEpisodes(BigInt(id));

    return episodes.map((episode) => ({
      ...episode,
      id: episode.id.toString(),
      anime_id: episode.anime_id.toString(),
    }));
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
