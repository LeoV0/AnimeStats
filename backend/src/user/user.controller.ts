import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

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
}
