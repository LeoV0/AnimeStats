import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { Param } from '@nestjs/common';

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
}
