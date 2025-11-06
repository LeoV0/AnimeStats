import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';

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
}
