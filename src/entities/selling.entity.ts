/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, } from 'typeorm';
import { UserEntity } from './user.entity';
import { PaymentEntity } from './payment.entity';

@Entity('selling', { schema: 'selling' })
export class SellingEntity {
    @PrimaryGeneratedColumn('uuid')
    id_venta: string;

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

    @ManyToOne(() => UserEntity, user => user.venta)
    usuario: UserEntity[];

    @OneToMany(() => PaymentEntity, payment => payment.venta)
    pago: PaymentEntity;

}