/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('acquisition_price', {schema:'selling'})
export class AcquisitionPriceEntity {

    @PrimaryGeneratedColumn('uuid')
    id_adquisicion: string;

    @Column({
        name: 'valor_adquisicion',
        type: 'integer',
        nullable: false
    })
    valor_adquisicion: number

    @Column({
        name: 'estado',
        type: "boolean",
        nullable: false
    })
    estado: boolean;

    @Column({ 
        name: 'fecha_registro',
        type: 'date',
        nullable: false 
    })
    fecha_registro: Date ;

    @OneToMany(()=> ProductEntity, product => product.precio_adquisicion )
    producto: ProductEntity;

}