/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('provider', {schema:'provider'})
export class ProviderEntity {

    @PrimaryColumn({
        name: 'identificacion_proveedor',
        type: 'varchar',
        nullable: false
    })
    identificacion_proveedor: string;

    @Column({
        name: 'nombre',
        type: 'varchar',
        nullable: false
    })
    nombre: string

    @Column({
        name: 'correo',
        type: "varchar",
        nullable: false
    })
    correo: string;

    @Column({
        name: 'telefono',
        type: "varchar",
        nullable: false
    })
    telefono: string;

    @Column({
        name: 'direccion',
        type: "varchar",
        nullable: false
    })
    direccion: string;

}