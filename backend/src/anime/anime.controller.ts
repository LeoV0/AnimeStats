import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('animes')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  getAllAnimes() {
    console.log('GET /animes called');
    return this.animeService.findAll();
  }
}
