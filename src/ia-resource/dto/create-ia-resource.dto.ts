import { IsString } from "class-validator";

export class CreateIaResourceDto {

    @IsString()
    defcollection: string;

    @IsString()
    field_id: string;

    @IsString()
    content_route?: string;

    @IsString()
    type?: string; // DOC, EXCEL, PDF, TEXT texto

}
