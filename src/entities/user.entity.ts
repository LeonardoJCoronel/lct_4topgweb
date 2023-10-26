/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import { RolUsuarioEntity } from './rol_user.entity';

@Entity({ name: 'usuario' })
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({
        name: 'nombre_usuario',
        type: 'varchar', 
        length: 100, 
        nullable: false
    })
    nombre_usuario: string;

    @Column({ 
        name: 'apellido_usuario',
        type: 'varchar', 
        length: 100, 
        nullable: false })
    apellido_usuario: string;

    @Column({ 
        name: 'fecha_nacimiento',
        type: 'date', 
        nullable: false 
    })
    fecha_nacimiento: Date

    @Column({
        name: 'fecha_registro', 
        type: 'date', 
        nullable: false, 
        default: () => 'CURRENT_DATE' 
    })
    fecha_registro: Date

    @Column({ 
        name: 'contrasenia',
        type: 'varchar', 
        nullable: false 
    })
    contrasenia: string

    @Column({ 
        name: 'correo',
        type: 'varchar', 
        nullable: false 
    })
    correo: string

    @Column({ 
        name: 'estado',
        type: 'boolean', 
        default: true, 
        nullable: false 
    })
    estado: boolean

    @Column({ 
        name: 'cedula',
        type: 'varchar', 
        nullable: false, 
        unique: true 
    })
    cedula: string

    // @ManyToMany(() => RolUsuarioEntity, (rol) => rol.tipo_usuario, { eager: true })
    // @JoinTable({ 
    //   name: 'usuario_tipo',
    //   joinColumn: { name: 'usuario_id' },
    //   inverseJoinColumn: { name: 'rol_id' },
    // })
    // tipo_usuarioId: RolUsuarioEntity[];

}
