import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmailDto {

    @IsNotEmpty()
    @IsString()
    to: string;

    @IsNotEmpty()
    @IsString()
    from: string;

    @IsOptional()
    subject: string;

    @IsOptional()
    html: string;

    @IsOptional()
    attachments?: string[];

    @IsOptional()
    data?: object;
}
