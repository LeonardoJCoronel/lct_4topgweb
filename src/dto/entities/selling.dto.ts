/* eslint-disable prettier/prettier */
import { IsBoolean, IsDate, IsNotEmpty, IsNotEmptyObject } from "class-validator";

export class SellingDto{

    @IsNotEmpty()
    @IsBoolean()
    estado;

    @IsDate()
    @IsNotEmpty()
    readonly fecha_venta;

    @IsNotEmptyObject()
    readonly usuario;
}