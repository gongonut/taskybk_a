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

  async findAllShort() {
    const result = [];
    (await this.categModel.find()).forEach(cat => {
      result.push({_id: cat._id, title: cat.name, parentIndex: cat.indexCategory, visible: cat.visible})
    });
    return { status: 200, data: result };
  }

  findList(filterQuery: any): Promise<Category[]> {
    const { catlist } = filterQuery;
    const options = {};
    if (catlist && catlist.length > 0) {
      const acategories = catlist.split(',');
      options['_id'] = { $in: acategories };
    }
    // return this.categModel.findById(id).exec();
    return this.categModel.find(options)
  }

  findOne(id: string) {
    return this.categModel.findById(id).exec();
  }

  

  update(id: string, updateCategDto: UpdateCategDto) {
    return this.categModel.findByIdAndUpdate(id, updateCategDto, { new: true });
  }

  remove(id: string) {
    return this.categModel.findByIdAndRemove(id);
  }
}
