import { Injectable } from '@nestjs/common';
import { CreateIaResourceDto } from './dto/create-ia-resource.dto';
import { UpdateIaResourceDto } from './dto/update-ia-resource.dto';
import { IAresource } from './schemas/iares.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IaResourceService {

  constructor(@InjectModel(IAresource.name) private iaModel: Model<IAresource>) { }

  async create(createIaResourceDto: CreateIaResourceDto) {
    const createdcateg = await new this.iaModel(createIaResourceDto);
    return await createdcateg.save();
  }

  findAll() {
    return this.iaModel.find().exec();
  }

  findOne(id: string) {
    return this.iaModel.findById(id).exec();
  }

  update(id: string, updateIaResourceDto: UpdateIaResourceDto) {
    return this.iaModel.findByIdAndUpdate(id, updateIaResourceDto, { new: true });
  }

  remove(id: string) {
    return this.iaModel.findByIdAndRemove(id);
  }
}
