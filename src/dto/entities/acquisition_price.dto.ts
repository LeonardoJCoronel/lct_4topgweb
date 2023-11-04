/* eslint-disable prettier/prettier */

import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class AcquisitionPriceDto {

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly valor_adquisicion;

    @IsNotEmpty()
    @IsBoolean()
    estado;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_registro;
}