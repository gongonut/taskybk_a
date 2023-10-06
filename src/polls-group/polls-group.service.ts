import { Injectable } from '@nestjs/common';
import { CreatePollsGroupDto } from './dto/create-polls-group.dto';
import { UpdatePollsGroupDto } from './dto/update-polls-group.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PollsGroup } from './schemas/prollsgroup.shemas';

@Injectable()
export class PollsGroupService {

  constructor (@InjectModel(PollsGroup.name) private plgpModel: Model<PollsGroup>) {}

  async create(createPollsGroupDto: CreatePollsGroupDto): Promise<PollsGroup> {
    const createdPlgrp = await new this.plgpModel(createPollsGroupDto);
    return createdPlgrp.save();
  }

  async findById(id: string): Promise<PollsGroup> {
    return await this.plgpModel.findById(id).exec();
  }

  async update(id: string, updatePollsGroupDto: UpdatePollsGroupDto) {
    return await this.plgpModel.findByIdAndUpdate(id, updatePollsGroupDto, { new: true });
  }

  async remove(id: string) {
    return await this.plgpModel.findByIdAndRemove(id);
  }
}
