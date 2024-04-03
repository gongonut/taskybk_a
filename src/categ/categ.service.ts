import { Injectable } from '@nestjs/common';
import { CreateCategDto } from './dto/create-categ.dto';
import { UpdateCategDto } from './dto/update-categ.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/categ.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategService {

  constructor(@InjectModel(Category.name) private categModel: Model<Category>) { }

  async create(createCategDto: CreateCategDto): Promise<Category> {
    const createdcateg = await new this.categModel(createCategDto);
    return await createdcateg.save();
  }

  findAll() {
    return this.categModel.find().exec();
  }

  findOne(id: number) {
    return this.categModel.findById(id).exec();
  }

  update(id: number, updateCategDto: UpdateCategDto) {
    return this.categModel.findByIdAndUpdate(id, updateCategDto, { new: true });
  }

  remove(id: number) {
    return this.categModel.findByIdAndRemove(id);
  }
}
