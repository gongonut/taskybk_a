import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAppointDto {

    _id: string;

    @IsString()
    type: string;

    @IsNumber()
    datetime: number;

    @IsNumber()
    dateend: number;

    @IsString()
    staff_name: string;

    @IsOptional()
    @IsString()
    contact?: string;

    @IsOptional()
    @IsString()
    crm_costum_name?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    pollresult_id?: string;

    @IsOptional()
    @IsBoolean()
    full?: boolean;

    @IsOptional()
    @IsString()
    pollgrp_id?: string; // El id no _id

    @IsOptional()
    @IsString()
    pollgrp_model_name?: string;

    @IsOptional()
    prod_list?: string[];

    @IsOptional()
    @IsString()
    notes?: string;

    @IsBoolean()
    ended: boolean;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    geoLoc?: object;

    @IsOptional()
    defa_values?: object;

    @IsString()
    owner: string;

    @IsOptional()
    @IsString()
    sche_schedule?: string;

    @IsOptional()
    @IsNumber()
    sche_other?: number;

    @IsOptional()
    notifMailList?: string[]; // lista de correos eletrónicos para notificar?: string;

}
