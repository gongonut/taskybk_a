import { Injectable } from '@nestjs/common';
import { CreatePollExecuteDto } from './dto/create-poll-execute.dto';
import { UpdatePollExecuteDto } from './dto/update-poll-execute.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PollExecute,  } from './schemas/poll-execute.schema';
import { Model } from 'mongoose';

@Injectable()
export class PollExecuteService {

  constructor (@InjectModel(PollExecute.name) private plgpModel: Model<PollExecute>) {}

  async create(createPollExecuteDto: CreatePollExecuteDto) {
    const createdPlgrp = await new this.plgpModel(createPollExecuteDto);
    return createdPlgrp.save();
  }

  findAll() {
    return `This action returns all pollExecute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pollExecute`;
  }

  update(id: number, updatePollExecuteDto: UpdatePollExecuteDto) {
    return `This action updates a #${id} pollExecute`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollExecute`;
  }
}
