/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoUsuarioEntity } from './tipo_usuario.entity';
import { Repository } from 'typeorm';
import { CreateTipoUsuarioDto } from './create-rol.dto';

@Injectable()
export class TipoUsuarioService {
  constructor(
    @InjectRepository(TipoUsuarioEntity)
    private readonly tipoUsuarioRepository: Repository<TipoUsuarioEntity>,
  ) { }

  async getAll(): Promise<TipoUsuarioEntity[]> {
    const roles = await this.tipoUsuarioRepository.find();
    if (!roles.length)
      throw new NotFoundException(
        'No existe tipo usuario en la lista',
      );
    return roles;
  }

  async create(tipo_usuario: CreateTipoUsuarioDto): Promise<any> {
    const exists = await this.tipoUsuarioRepository.findOne({
      where: { nombre_tipo_usuario: tipo_usuario.nombre_tipo_usuario },
    });
    if (exists)
      throw new BadRequestException('ese rol ya existe');
    await this.tipoUsuarioRepository.save(tipo_usuario as TipoUsuarioEntity);
    return 'rol creado';
  }
}
