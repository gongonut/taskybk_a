import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsOptional()
    @IsString()
    code: string;
    @IsNotEmpty()
    @IsString()
    parent_id: string;
    @IsOptional()
    @IsString()
    description?: string;
    @IsOptional()
    @IsString()
    description_long?: string;
    @IsOptional()
    @IsNumber()
    price?: number;
    @IsOptional()
    @IsNumber()
    tax_p?: number;
    @IsOptional()
    @IsNumber()
    stock?: number;
    @IsOptional()
    @IsNumber()
    stars?: number;
    @IsOptional()
    @IsString()
    chip?: string;
    @IsOptional()
    @IsString()
    opinion?: string;
    @IsString()
    who_id?: string;
    @IsOptional()
    categIds?: object[]; // id de las categorías a las que pertenece para búsqueda
    @IsOptional()
    optList?: object[];
    @IsOptional()
    prodXFilterList?: string[]; // Ids de los productos padres Ejemplo:ojyKt:XS, ojyKt:S, ojyKt:M, ojyKt:L, ojyKt:XL, ojyKt:XXL
    @IsOptional()
    shoppingConditions?: object[];
    @IsOptional()
    pictures?: string[];
    @IsOptional()
    @IsString()
    pict_proportion?: string; // presentación 3/4, 4/3, ... Lo toma de ChrOption
    @IsOptional()
    @IsString()
    pict_density?: number; // Densidad de la imagen Lo toma de ChrOption
}
