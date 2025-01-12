import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCostumerDto {

    @IsBoolean()
    @IsNotEmpty()
    active: boolean;

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    linkup_1?: string;

    @IsOptional()
    @IsString()
    phone_1?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    email_1?: string;

    @IsOptional()
    @IsString()
    linkup_2?: string;

    @IsOptional()
    @IsString()
    phone_2?: string;

    @IsOptional()
    @IsString()
    email_2?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    state?: string;

    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsString()
    zip?: string;

    @IsOptional()
    geoLoc?: { lat: number, lng: number };
}
