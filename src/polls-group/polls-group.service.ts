import { Injectable } from '@nestjs/common';
import { CreatePollsGroupDto } from './dto/create-polls-group.dto';
import { UpdatePollsGroupDto } from './dto/update-polls-group.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PollGroups } from './schemas/prollsgroup.shemas';
// import { join } from 'path';
// import * as fs from 'fs';

@Injectable()
export class PollsGroupService {

  constructor(@InjectModel(PollGroups.name) private plgpModel: Model<PollGroups>) { }

  async create(createPollsGroupDto: CreatePollsGroupDto): Promise<PollGroups> {
    const createdPlgrp = await new this.plgpModel(createPollsGroupDto);
    return await createdPlgrp.save();
  }

  async findById(id: string, user: any): Promise<PollGroups> {
    // si es index modifico 
    if (id === 'index') {
      const grpIndex = await this.plgpModel.findOne({ id });
      if (grpIndex) {
        const json = grpIndex.toJSON();
        if (json.children.length > 0) {
          this.cleanIndex(json.children[0], user.id);
          return json;
        }

      }
    }
    return await this.plgpModel.findOne({ id }).exec();
  }

  async findByExported(id: string): Promise<PollGroups[]> {
    const result = [];
    (await this.plgpModel.find({ 'exported': true, taskerList: { $in: id } }))
      .forEach(pgr => {
        result.push({
          _id: pgr._id,
          id: pgr.id,
          client_logo: pgr.client_logo || '',
          name: pgr.name,
          description: pgr.description || '',
          total: pgr.total || 0,
          executed: pgr.executed || 0,
          geolocation: pgr.geolocation || '',
          payxpoll: pgr.payxpoll || 0,
        })
      });
    // return { status: 200, data: result };
    return result;
  }

  async findAll(): Promise<PollGroups[]> {
    return await this.plgpModel.find({ 'active': true }).exec();
  }

  async update(id: string, updatePollsGroupDto: UpdatePollsGroupDto) {
    return await this.plgpModel.findByIdAndUpdate(id, updatePollsGroupDto, { new: true });
  }

  async remove(id: string) {
    return await this.plgpModel.findByIdAndRemove(id);
  }

  private cleanIndex(tree: any, id: string): boolean {
    if (tree.controlList && tree.controlList.length > 0 && !tree.controlList.includes(id)) { return true; }
    if (tree.children && tree.children.length > 0) {
      for (let i = 0; i < tree.children.length; i++) {
        const b = this.cleanIndex(tree.children[i], id);
        if (b) { delete tree.children[i] }
      }
    }
    return false;
  }

}
