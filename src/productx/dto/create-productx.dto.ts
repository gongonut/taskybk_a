import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductxDto {
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
    @IsNumber()
    stock?: number;

    @IsOptional()
    categIds?: object[]; // id de las categorías a las que pertenece para búsqueda

    @IsOptional()
    categList?: object[];

    @IsOptional()
    prodXParentList?: string[]; // Ids de los productos padres
}
