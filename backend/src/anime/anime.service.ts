import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Anime } from '@prisma/client';

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Anime[]> {
    return this.prisma.anime.findMany();
  }
}
