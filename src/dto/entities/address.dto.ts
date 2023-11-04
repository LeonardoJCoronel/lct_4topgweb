/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddressDto {
    @IsNotEmpty()
    @IsString()
    readonly calle_primaria;

    @IsOptional()
    @IsString()
    readonly calle_secundaria;

    @IsNotEmpty()
    @IsString()
    readonly numero_casa;
}
