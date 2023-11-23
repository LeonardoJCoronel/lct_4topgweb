/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('address', {schema:'user'})
export class AddressEntity {

    @PrimaryGeneratedColumn()
    id_direccion: number;

    @Column({ 
        name: 'calle_primaria',
        type: 'varchar', 
        nullable: true
    })
    calle_primaria: string;

    @Column({ 
        name: 'calle_secundaria',    
        type: 'varchar', 
        nullable: true
    })
    calle_secundaria: string;

    @Column({ 
        name: 'numero_casa',    
        type: 'varchar',
        nullable: true
    })
    numero_casa: string;

    @ManyToOne(()=> UserEntity)
    @JoinColumn({name: 'usuario'})
    usuario: UserEntity;
}