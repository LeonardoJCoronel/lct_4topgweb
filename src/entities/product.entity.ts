/* eslint-disable prettier/prettier */
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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