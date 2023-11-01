import { Exclude, Expose } from "@nestjs/class-transformer";
import { BaseProductoDto } from "./base-product.dto";

@Exclude()
export class ReadProductDto extends BaseProductoDto {

    @Expose()
    readonly id;

    @Expose()
    readonly title;

    @Expose()
    readonly price;

    @Expose()
    readonly description;

    @Expose()
    readonly image;
}