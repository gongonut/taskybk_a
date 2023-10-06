import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
// import { OnStartEnd } from "src/datatypes";

export class CreatePollsGroupDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string; // Si empresa: Nombre empresa

    @IsOptional()
    @IsString()
    client_id?: string; // Si es empresa

    @IsOptional()
    @IsString()
    client_logo?: string;
    // name?: string; // Si es empresa

    @IsOptional()
    @IsString()
    contacName?: string;

    @IsOptional()
    @IsString()
    phones?: string;
    
    @IsOptional()
    @IsNumber()
    age_from?: number;

    @IsOptional()
    @IsNumber()
    age_to?: number;

    @IsNotEmpty()
    pollList: object[];

    @IsNotEmpty()
    staffList: string[]; // Los Ids del staff

    @IsOptional()
    @IsBoolean()
    active?: boolean;

    @IsNotEmpty()
    children: object[];

    @IsOptional()
    @IsString()
    parentRootNodeId?: string;

    @IsNotEmpty()
    skills: string[]; // Lista de habilidades requeridas

    @IsOptional()
    geolocation?: string[];

    @IsOptional()
    @IsNumber()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @IsOptional()
    @IsNumber()
    stars?: number; // Minimo de estrellas del staff

    @IsNotEmpty()
    @IsBoolean()
    ref: boolean; // En true consultar la base de datos

    /*
    @IsOptional()
    onStart?: object;

    @IsOptional()
    onEnd?: object;
    */

}
