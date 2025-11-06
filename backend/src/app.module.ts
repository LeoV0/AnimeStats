import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeModule } from './anime/anime.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AnimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
