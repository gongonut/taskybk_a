import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategDto {

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsString()
    urlpicture: string;

    @IsOptional()
    subCategory?: object[]
}
