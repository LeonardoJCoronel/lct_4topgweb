/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from '../productos/product.entity';

@Entity('unite_price', {schema:'selling'})
export class UnitePriceEntity {

    @PrimaryGeneratedColumn('uuid')
    id_unitario: string;

    @Column({
        name: 'valor_venta',
        type: 'decimal',
        nullable: false
    })
    valor_venta: number

    @Column({
        name: 'estado',
        type: "boolean",
        nullable: false
    })
    estado: boolean;

    @Column({ 
        name: 'fecha_inicio_vigencia',
        type: 'date',
        nullable: false 
    })
    fecha_inicio_vigencia: Date ;

    @Column({ 
        name: 'fecha_fin_vigencia',
        type: 'date',
        nullable: false
    })
    fecha_fin_vigencia: Date ;

    @OneToMany(()=> ProductEntity, product => product.precio_unitario )
    producto: ProductEntity;

}