import {
  Controller,
  Post,
  Patch,
  Get,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.userService.createUser(newUser);
  }

  @Get(':id_usuario')
  getUserById(@Param('id_usuario') id: number) {
    return this.userService.getUserById(id);
  }

  @Get()
  getUserList() {
    return this.userService.getUsersList();
  }

  @Delete(':id_usuario')
  deleteUser(@Param('id_usuario') id: number) {
    return this.userService.deleteUser(id);
  }

  @Patch(':id_usuario')
  updateUser(@Param('id_usuario') id: number, @Body() usuario: UpdateUserDto) {
    return this.userService.updateUser(id, usuario);
  }
}
