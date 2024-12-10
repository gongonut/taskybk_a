import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProdimglistDto {
    @IsOptional()
    @IsString()
    prod_id: string;
    @IsOptional()
    prodparentList?: string[]; // Ids de los productos padres Ejemplo:ojyKt:XS, ojyKt:S, ojyKt:M, ojyKt:L, ojyKt:XL, ojyKt:XXL
    @IsOptional()
    data?: string;
}
