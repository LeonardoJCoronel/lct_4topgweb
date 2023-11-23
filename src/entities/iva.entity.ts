/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from '../productos/product.entity';

@Entity('iva', {schema:'product'})
export class IvaEntity {
  @PrimaryGeneratedColumn('uuid')
  id_iva: string;

  @Column({ 
    name: 'porcentaje',
    type: 'integer',
    nullable: false
  })
  porcentaje: number;

  @Column({ 
    name: 'estado',
    type: 'boolean',
    nullable: false
  })
  estado: boolean;

  @Column({ 
    name:'fecha_inicio_iva',
    type: 'date',
    nullable: false 
  })
  fecha_inicio_iva: Date;

  @Column({ 
    name:'fecha_fin_iva',
    type: 'date',
    nullable: false
  })
  fecha_fin_iva: Date;

  @OneToMany(()=> ProductEntity, product => product.iva )
  producto: ProductEntity;
}
