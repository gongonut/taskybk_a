import { Injectable } from '@nestjs/common';
import { CreateProductxDto } from './dto/create-productx.dto';
import { UpdateProductxDto } from './dto/update-productx.dto';

@Injectable()
export class ProductxService {
  create(createProductxDto: CreateProductxDto) {
    return 'This action adds a new productx';
  }

  findAll() {
    return `This action returns all productx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productx`;
  }

  update(id: number, updateProductxDto: UpdateProductxDto) {
    return `This action updates a #${id} productx`;
  }

  remove(id: number) {
    return `This action removes a #${id} productx`;
  }
}
