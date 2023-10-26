/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('garantia', {schema:'product'})
export class GarantiaEntity {
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
}
