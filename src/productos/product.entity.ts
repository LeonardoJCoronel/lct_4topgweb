/* eslint-disable prettier/prettier */
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "../entities/category.entity";
import { IvaEntity } from "../entities/iva.entity";
import { GarantyEntity } from "../entities/garanty.entity";
import { UnitePriceEntity } from "../entities/unite_price.entity";
import { AcquisitionPriceEntity } from "../entities/acquisition_price.entity";

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
        name: 'code',
        nullable: false,
        comment: 'product_code'
    })
    code: string;

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

    @ManyToOne(()=> AcquisitionPriceEntity, acquisition_price => acquisition_price.producto)
    precio_adquisicion: AcquisitionPriceEntity[];

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