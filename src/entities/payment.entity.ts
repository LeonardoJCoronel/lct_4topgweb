/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, } from 'typeorm';
import { SellingEntity } from '../ventas/selling.entity';

@Entity('payment', { schema: 'payment' })
export class PaymentEntity {
    @PrimaryGeneratedColumn('uuid')
    id_pago: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true
    })
    deletedAt: Date;

    @Column({
        name: 'monto_pago',
        type: 'integer',
        comment: 'payment quantity'
    })
    monto_pago: number;

    @Column({ 
        name: 'fecha_pago',
        type: 'date',
        comment: 'date payment'
    })
    fecha_pago: Date;

    @ManyToOne(() => SellingEntity, selling => selling.pago)
    venta: SellingEntity[];

}
