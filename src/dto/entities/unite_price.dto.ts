/* eslint-disable prettier/prettier */
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class UnitePriceDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly valor_venta;

    @IsBoolean()
    @IsNotEmpty()
    estado;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_inicio_vigencia;

    
    @IsNotEmpty()
    @IsDate()
    readonly fecha_fin_vigencia;
}