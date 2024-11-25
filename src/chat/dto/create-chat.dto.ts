import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { DbState } from "src/datatypes";

export class CreateChatDto {
    
    @IsNotEmpty()
    @IsString()
    dbState: DbState;

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