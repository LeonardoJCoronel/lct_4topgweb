import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { TipoUsuarioEntity } from 'src/tipo_usuario/tipo_usuario.entity';
import { TipoUsuarioModule } from 'src/tipo_usuario/tipo_usuario.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, TipoUsuarioEntity]),
    TipoUsuarioModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
