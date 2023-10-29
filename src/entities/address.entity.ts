/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('address', {schema:'product'})
export class AddressEntity {

    @PrimaryGeneratedColumn('uuid')
    id_direccion: string;

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

    @ManyToOne(()=> UserEntity, usuario => usuario.direccion)
    usuario: UserEntity[]
}