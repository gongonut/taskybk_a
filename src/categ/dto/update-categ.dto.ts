import { PartialType } from '@nestjs/swagger';
import { CreateCategDto } from './create-categ.dto';

export class UpdateCategDto extends PartialType(CreateCategDto) {}
