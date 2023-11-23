/* eslint-disable prettier/prettier */

import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolEnum } from '../dto/rol.enum';
import { UserEntity } from '../user/user.entity';

@Entity('tipo-usuario', { schema: 'user' })
export class RolUserEntity {
    
  @PrimaryGeneratedColumn()
  id_tipo_usuario: number;

  @Column({ type: 'character varying', default: 'cliente' })
  nombre_tipo_usuario: RolEnum;

  @ManyToMany(() => UserEntity, user => user.tipo_usuario)
  user : UserEntity[];

}
