/* eslint-disable prettier/prettier */
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class IvaDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly porcentaje;

    @IsNotEmpty()
    @IsBoolean()
    readonly estado;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_inicio_iva;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_fin_iva;
}

