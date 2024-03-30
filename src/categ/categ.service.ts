import { Injectable } from '@nestjs/common';
import { CreateCategDto } from './dto/create-categ.dto';
import { UpdateCategDto } from './dto/update-categ.dto';

@Injectable()
export class CategService {
  create(createCategDto: CreateCategDto) {
    return 'This action adds a new categ';
  }

  findAll() {
    return `This action returns all categ`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categ`;
  }

  update(id: number, updateCategDto: UpdateCategDto) {
    return `This action updates a #${id} categ`;
  }

  remove(id: number) {
    return `This action removes a #${id} categ`;
  }
}
