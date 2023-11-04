/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPositive, IsDate, IsNumber } from "class-validator";

export class PaymentDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly monto_pago;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_pago;
}

