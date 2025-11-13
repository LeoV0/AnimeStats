import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService, AnimeProgress } from './user.service';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

interface JwtRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    const users = await this.userService.findAll();
    return users.map((user) => ({
      ...user,
      id: user.id.toString(),
    }));
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getCurrentUser(@Req() req: JwtRequest) {
    if (!req.user?.id) {
      throw new NotFoundException('User not authenticated');
    }

    const user = await this.userService.findById(BigInt(req.user.id));

    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
    };
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.findById(BigInt(id));
    return {
      ...user,
      id: user.id.toString(),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/progress')
  async getProgressById(@Param('id') id: string): Promise<AnimeProgress[]> {
    const userId = BigInt(id);
    const progress = await this.userService.getProgressById(userId);

    if (!progress || progress.length === 0) {
      throw new NotFoundException('No progress found for this user');
    }

    return progress;
  }
}
