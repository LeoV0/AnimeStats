import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeModule } from './anime/anime.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EpisodesModule } from './episodes/episodes.module';
import { PassportModule } from '@nestjs/passport';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    PassportModule,
    PrismaModule,
    AnimeModule,
    AuthModule,
    UserModule,
    EpisodesModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
