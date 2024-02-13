import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateChatbotDto {
    // sent: boolean;

    @IsNotEmpty()
    @IsNumber()
    date_ini: number;

    @IsNumber()
    date_end: number;

    @IsString()
    agents?: string[]; // _id de los agentes que intervienen

    @IsString()
    clients?: string[]; // _id de los clientes

    @IsOptional()
    @IsString()
    chats?: object[];

    @IsOptional()
    @IsString()
    room?: string;
    
}
