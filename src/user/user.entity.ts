/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEntity } from '../address/address.entity';
import { SellingEntity } from '../ventas/selling.entity';
import { IsNumber } from 'class-validator';
import { TipoUsuarioEntity } from 'src/tipo_usuario/tipo_usuario.entity';

@Entity('usuario', {schema: 'user'})
export class UserEntity {

    @PrimaryGeneratedColumn()
    @IsNumber()
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

    @OneToMany(()=> AddressEntity, direccion => direccion.usuario )
    direccion: AddressEntity[];

    @OneToMany(()=> SellingEntity, selling => selling.usuario )
    venta: SellingEntity;


    @ManyToMany(() => TipoUsuarioEntity, (rol) => rol.usuario, { eager: true })
    @JoinTable({ 
      name: 'usuario_tipo',
      joinColumn: { name: 'usuario_id' },
      inverseJoinColumn: { name: 'rol_id' },
      schema: 'user'
    })
    tipo_usuario: TipoUsuarioEntity[];

}
