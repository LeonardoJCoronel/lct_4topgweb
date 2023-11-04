/* eslint-disable prettier/prettier */
import { IsBoolean, IsDate, IsNotEmpty } from "class-validator";

export class GarantyDto {
    @IsNotEmpty()
    @IsBoolean()
    readonly estado;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_inicio_vigencia;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_fin_vigencia;
}
