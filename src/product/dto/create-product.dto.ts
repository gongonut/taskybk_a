import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

/*
export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    id: string;

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
    categIds?: object[]; // id de las categorías a las que pertenece para búsqueda

    @IsOptional()
    categList?: object[];
}
*/

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    id: string;
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
    @IsOptional()
    categIds?: object[]; // id de las categorías a las que pertenece para búsqueda
    @IsOptional()
    categ2List?: object[];
    @IsOptional()
    prodXParentList?: string[]; // Ids de los productos padres
}
