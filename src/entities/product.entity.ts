/* eslint-disable prettier/prettier */
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { IvaEntity } from "./iva.entity";
import { GarantyEntity } from "./garanty.entity";
import { UnitePriceEntity } from "./unite_price.entity";

@Entity('product', { schema: 'ventas' })
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'product_title'
    })
    title: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'product_description'
    })
    description: string;

    @Column('numeric', {
        name: 'price',
        nullable: false,
        comment: 'product_price'
    })
    price: number;

    @ManyToOne(()=> CategoryEntity, category => category.producto)
    categoria: CategoryEntity[];

    @ManyToOne(()=> IvaEntity, iva => iva.producto)
    iva: IvaEntity[];

    @ManyToOne(()=> GarantyEntity, garanty => garanty.producto)
    garantia: GarantyEntity[];

    @ManyToOne(()=> UnitePriceEntity, unite_price => unite_price.producto)
    precio_unitario: UnitePriceEntity[];

    @BeforeInsert()
    @BeforeUpdate()
    async upperCase() {
        if (!this.title) {
            return;
        }
        this.title = this.title.toUpperCase();
    }

    /*@BeforeInsert()
    @BeforeUpdate()
    async lowerCase() {
        if (!this.email) {
            return;
        }
        this.email = this.email.toLowerCase().trim();
    }*/

    /*@BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.password) {
            return;
        }
        this.password = Bcrypt.hash(this.password, 12);
    }*/

}