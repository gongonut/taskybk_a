import { PartialType } from '@nestjs/swagger';
import { CreateProductxDto } from './create-productx.dto';

export class UpdateProductxDto extends PartialType(CreateProductxDto) {}
