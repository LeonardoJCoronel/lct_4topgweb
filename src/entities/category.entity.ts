/* eslint-disable prettier/prettier */
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('category', { schema: 'ventas' })
export class CategoriaEntity {
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
        name: 'name',
        nullable: false,
        comment: 'category_name'
    })
    name: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'category_description'
    })
    description: string;

    @BeforeInsert()
    @BeforeUpdate()
    async validateDescription() {
        const malasPalabras = ['#/*', '@%&', '#*@'];
        const message = 'Descripcion no valida';
        for (let i = 0; i < malasPalabras.length; i++) {
            if (this.description.includes(malasPalabras[i])) {
                return message;
            }
        }
    }
}