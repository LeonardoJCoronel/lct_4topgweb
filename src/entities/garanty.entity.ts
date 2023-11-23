/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from '../productos/product.entity';

@Entity('garantia', {schema:'product'})
export class GarantyEntity {
  @PrimaryGeneratedColumn('uuid')
  id_garantia: string;

  @Column({
    name: 'estado', 
    type: 'boolean',
    nullable: false
  })
  estado: boolean;

  @Column({ 
    name: 'fecha_inicio_vigencia',
    type: 'date',
    nullable: false
  })
  fecha_inicio_vigencia: Date;

  @Column({ 
    name: 'fecha_fin_vigencia',
    type: 'date',
    nullable: false
  })
  fecha_fin_vigencia: Date;

  @OneToMany(()=> ProductEntity, product => product.garantia )
  producto: ProductEntity;
}
