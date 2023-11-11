import { Injectable } from '@nestjs/common';
import { CreatePollsGroupDto } from './dto/create-polls-group.dto';
import { UpdatePollsGroupDto } from './dto/update-polls-group.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PollGroup } from './schemas/prollsgroup.shemas';
// import { join } from 'path';
// import * as fs from 'fs';

@Injectable()
export class PollsGroupService {

  constructor (@InjectModel(PollGroup.name) private plgpModel: Model<PollGroup>) {}

  async create(createPollsGroupDto: CreatePollsGroupDto): Promise<PollGroup> {
    const createdPlgrp = await new this.plgpModel(createPollsGroupDto);
    return await createdPlgrp.save();
  }

  async findById(id: string): Promise<PollGroup> {
    return await this.plgpModel.findOne({id}).exec();
  }

  async findByExported(): Promise<PollGroup[]> {
    return await this.plgpModel.find({ 'exported': true }).exec();
  }

  async findAll(): Promise<PollGroup[]> {
    return await this.plgpModel.find({ 'active': true }).exec();
  }

  async update(id: string, updatePollsGroupDto: UpdatePollsGroupDto) {
    return await this.plgpModel.findByIdAndUpdate(id, updatePollsGroupDto, { new: true });
  }

  async remove(id: string) {
    return await this.plgpModel.findByIdAndRemove(id);
  }
}
