import { PartialType } from '@nestjs/swagger';
import { CreateProdimglistDto } from './create-prodimglist.dto';

export class UpdateProdimglistDto extends PartialType(CreateProdimglistDto) {}
