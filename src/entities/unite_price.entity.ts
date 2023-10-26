/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address', {schema:'payment'})
export class PrecioUnitarioEntity {

    @PrimaryGeneratedColumn('uuid')
    id_unitario: string;

    @Column({
        name: 'valor_venta',
        type: 'integer',
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

}