/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { RolEnum } from './rol.enum';

@Entity({ name: 'tipo-usuario' , schema: 'user' })
export class TipoUsuarioEntity {
  @PrimaryGeneratedColumn()
  id_usuario_rol: number;

  @Column({ type: 'character varying', default: 'cliente' })
  nombre_tipo_usuario: RolEnum;

  @ManyToMany(() => UserEntity, (usuario) => usuario.tipo_usuario)
  usuario: UserEntity[];
}
