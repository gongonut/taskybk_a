import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    picture?: string;

    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsOptional()
    characterList?: object[];

    @IsOptional()
    shoppingConditions?: object[];

    @IsOptional()
    indexCategory?: string[];

    @IsBoolean()
    @IsNotEmpty()
    visible: boolean;
}
