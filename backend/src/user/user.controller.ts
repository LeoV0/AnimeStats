import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
  async getProgressById(@Param('id') id: string) {
    const userId = BigInt(id);
    const progress = await this.userService.getProgressById(userId);

    if (!progress || progress.length === 0) {
      throw new NotFoundException('No progress found for this user');
    }

    return progress;
  }
}
