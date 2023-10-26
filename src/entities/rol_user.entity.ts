/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import { UsuarioEntity } from './user.entity';
import { RolEnum } from './rol.enum';

@Entity({ name: 'tipo-usuario' })
export class RolUsuarioEntity {
    
  @PrimaryGeneratedColumn()
  id_tipo_usuario: number;

  @Column({ type: 'character varying', default: 'cliente' })
  nombre_tipo_usuario: RolEnum;

//   @ManyToMany(() => UsuarioEntity, usuario => usuario.tipo_usuarioId)
//   tipo_usuario: UsuarioEntity[];

}
