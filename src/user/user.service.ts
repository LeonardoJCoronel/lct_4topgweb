/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { TipoUsuarioEntity } from 'src/tipo_usuario/tipo_usuario.entity';
import { RolEnum } from 'src/dto/rol.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(TipoUsuarioEntity)
    private readonly tipoUsuarioRepository: Repository<TipoUsuarioEntity>,
  ) { }

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
    if (exists) {
      throw new BadRequestException(new Error('User ya registrado'));
    }
    const rolAdmin = await this.tipoUsuarioRepository.findOne({
      where: { nombre_tipo_usuario: RolEnum.ADMIN },
    });
    const rolUser = await this.tipoUsuarioRepository.findOne({
      where: { nombre_tipo_usuario: RolEnum.USER },
    });
    if (!rolAdmin || !rolUser)
      throw new InternalServerErrorException(
        'los roles aún no han sido creados',
      );
    const admin = this.userRepository.create(user);
    admin.tipo_usuario = [rolAdmin, rolUser];
    return await this.userRepository.save(admin);
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
