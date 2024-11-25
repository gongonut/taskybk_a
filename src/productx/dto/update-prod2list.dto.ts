import { PartialType } from '@nestjs/swagger';
// import { CreateProductxDto } from './create-productx.dto';
import { CreateProduct2ListDto } from './create-prod2list.dto';

export class UpdateProduct2ListDto extends PartialType(CreateProduct2ListDto) {}