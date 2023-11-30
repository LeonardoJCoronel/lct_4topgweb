import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUsersList() {
    const user = await this.userRepository.find({
      relations: ['tipo_usuario'],
    });
    if (!user.length)
      throw new NotFoundException(
        new Error('No existe un listado de usuarios'),
      );
    return user;
  }

  async createUser(user: CreateUserDto) {
    const { cedula, correo } = user;
    const exists = await this.userRepository.findOne({
      where: [{ cedula: cedula }, { correo: correo }],
    });
    if (exists) throw new BadRequestException(new Error('User ya registrado'));

    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async getUserById(id_usuario: number) {
    return await this.userRepository.findOne({
      where: {
        id_usuario,
      },
    });
  }

  async deleteUser(id_usuario: number) {
    return await this.userRepository.delete({ id_usuario });
  }

  async updateUser(id_usuario: number, user: UpdateUserDto) {
    return await this.userRepository.update({ id_usuario }, user);
  }
}
