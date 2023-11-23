import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcquisitionPriceEntity } from 'src/entities/acquisition_price.entity';
import { UnitePriceEntity } from 'src/entities/unite_price.entity';
import { GarantyEntity } from 'src/entities/garanty.entity';
import { IvaEntity } from 'src/entities/iva.entity';
import { SellingEntity } from 'src/ventas/selling.entity';
import { PaymentEntity } from 'src/entities/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AcquisitionPriceEntity,
      UnitePriceEntity,
      GarantyEntity,
      IvaEntity,
      SellingEntity,
      PaymentEntity,
    ]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
