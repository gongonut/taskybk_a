import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStaffDto {

    @IsString()
    uid?: string;

    @IsString()
    id?: string;

    @IsString()
    names?: string;

    @IsString()
    second_names?: string;

    @IsString()
    picture?: string;

    @IsNumber()
    age?: number;

    @IsString()
    address?: string;

    @IsOptional()
    skills?: string[]; // Lista de habilidades requeridas

    @IsOptional()
    elements?: string[]; // Lista de habilidades requeridas

    @IsOptional()
    @IsNumber()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @IsString()
    phone?: string;

    @IsString()
    platform?: string; // nequi daviplata 

    @IsString()
    platform_phone?: string;

    @IsNumber()
    stars?: number;

    @IsBoolean()
    active?: boolean;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsBoolean()
    legal_age?: boolean;

    @IsString()
    company_id?: string; // Nombre de la empresa a la que pertenece

    @IsBoolean()
    legal_acceptance?: boolean;

    @IsString()
    tag?: string; // Información no importante 1: edit; 2: delete;
}
