import { Injectable } from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Sell } from './schemas/sell.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SellService {

  constructor(@InjectModel(Sell.name) private categModel: Model<Sell>) { }
  create(createSellDto: CreateSellDto) {
    return 'This action adds a new sell';
  }

  findAll() {
    return `This action returns all sell`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sell`;
  }

  update(id: number, updateSellDto: UpdateSellDto) {
    return `This action updates a #${id} sell`;
  }

  remove(id: number) {
    return `This action removes a #${id} sell`;
  }
}
