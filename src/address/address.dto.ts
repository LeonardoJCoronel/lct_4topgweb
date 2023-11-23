/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {

    @IsNotEmpty()
    id_direccion

    @IsNotEmpty()
    @IsString()
    calle_primaria;

    @IsOptional()
    @IsString()
    calle_secundaria;

    @IsNotEmpty()
    @IsString()
    numero_casa;

    @IsNotEmpty()
    @IsNumber()
    usuario;
}


export class UpdateAddressDto {

    @IsNotEmpty()
    id_direccion

    @IsOptional()
    @IsString()
    calle_primaria;

    @IsOptional()
    @IsString()
    calle_secundaria;

    @IsOptional()
    @IsString()
    numero_casa;

    @IsNotEmpty()
    usuario;
}