import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateChatDto {
    
    @IsNotEmpty()
    @IsNumber()
    dbState: number;

    @IsNotEmpty()
    @IsString()
    mycollection: string;


    @IsNotEmpty()
    @IsString()
    field_id: string;

    @IsNotEmpty()
    userData: object;

    @IsNotEmpty()
    @IsString()
    usert_id: string;

    @IsNotEmpty()
    data: any;

    @IsNotEmpty()
    @IsNumber()
    date: number;

    @IsNotEmpty()
    @IsBoolean()
    save2DTB: boolean;

}