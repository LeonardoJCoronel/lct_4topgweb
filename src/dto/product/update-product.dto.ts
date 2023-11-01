import { PartialType } from "@nestjs/swagger";
import { BaseProductoDto } from "./base-product.dto";

export class UpdateProductDto extends PartialType(BaseProductoDto){

}