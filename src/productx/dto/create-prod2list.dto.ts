import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProduct2ListDto {
    @IsOptional()
    prodFilterList?: string[]; // Ids de los productos padres Ejemplo:ojyKt:XS, ojyKt:S, ojyKt:M, ojyKt:L, ojyKt:XL, ojyKt:XXL
    @IsOptional()
    prodParentList?: string[]; // Ids de los productos padres
    @IsString()
    @IsOptional()
    title?: string; // el value de chtOption
    @IsString()
    @IsOptional()
    data?: string; 
}
