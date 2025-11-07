import {
  Controller,
  Param,
  Post,
  Req,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

interface JwtRequest extends Request {
  user?: { id: string; email?: string };
}

@Controller('episodes')
export class EpisodesController {
  constructor(private episodeService: EpisodesService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':id/watched')
  async episodeAddWatched(
    @Param('id') episodeId: string,
    @Req() req: JwtRequest,
  ) {
    if (!req.user || !req.user.id) {
      throw new NotFoundException('User not authenticated');
    }

    const userId = BigInt(req.user.id);
    const episodeIdBig = BigInt(episodeId);

    await this.episodeService.episodeAddWatched(userId, episodeIdBig);

    return {
      user_id: userId.toString(),
      episode_id: episodeIdBig.toString(),
      message: 'Episode marked as watched!',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/watched')
  async episodeDelWatched(
    @Param('id') episodeId: string,
    @Req() req: JwtRequest,
  ) {
    if (!req.user || !req.user.id) {
      throw new NotFoundException('User not authenticated');
    }

    const userId = BigInt(req.user.id);
    const episodeIdBig = BigInt(episodeId);

    await this.episodeService.episodeDelWatched(userId, episodeIdBig);

    return {
      user_id: userId.toString(),
      episode_id: episodeIdBig.toString(),
      message: 'Episode removed to seen !',
    };
  }
}
