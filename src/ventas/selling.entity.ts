/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { PaymentEntity } from '../entities/payment.entity';

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
        name: 'estado',
        type: 'boolean',
        comment: 'selling state'
    })
    estado: boolean;

    @Column({
        name: 'fecha_venta',
        type: 'date',
        comment: 'selling date'
    })
    fecha_venta: Date;

    @ManyToOne(() => UserEntity, user => user.venta)
    usuario: UserEntity[];

    @OneToMany(() => PaymentEntity, payment => payment.venta)
    pago: PaymentEntity;

}
