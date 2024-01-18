import { IsOptional, IsString } from "class-validator";

export class CreateChatDto {

    @IsString()
    collection: string;

    @IsString()
    field_id: string;

    @IsString()
    user_id: string;

    @IsString()
    usert_id: string;

    @IsOptional()
    data: any
    
}