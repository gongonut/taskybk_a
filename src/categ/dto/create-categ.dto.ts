import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsString()
    @IsOptional()
    urlpicture?: string;

    @IsOptional()
    characterList: object[]

    @IsOptional()
    subCategory?: object[]
}
