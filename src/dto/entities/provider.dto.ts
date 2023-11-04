/* eslint-disable prettier/prettier */
import { IsAlpha, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ProviderDto{

    @IsAlpha()
    @IsNotEmpty()
    readonly nombre;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly correo;

    @IsNotEmpty()
    @IsString()
    readonly telefono;

    @IsNotEmpty()
    @IsString()
    readonly direccion;
}