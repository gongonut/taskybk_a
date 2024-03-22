import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCompanyDto {
    

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @IsOptional()
    logo?: string;

    @IsOptional()
    site?: string;

    @IsOptional()
    phone?: string;

    @IsOptional()
    address?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    appoint?: object[];
}
