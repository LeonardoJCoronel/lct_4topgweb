import { Allow, IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class BaseProductoDto {

    @Allow()
    @IsString()
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsAlpha()
    readonly title: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly image: string;

}

function isNotEmptyValidationOptions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}
