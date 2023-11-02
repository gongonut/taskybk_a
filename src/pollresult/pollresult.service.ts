import { Inject, Injectable } from '@nestjs/common';
import { CreatePollresultDto } from './dto/create-pollresult.dto';
import { UpdatePollresultDto } from './dto/update-pollresult.dto';
import { PollResult } from './schemas/pollresult.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatGateway } from 'src/chat/chat.gateway';

@Injectable()
export class PollresultService {

  constructor(
    @InjectModel(PollResult.name) private pollResultModel: Model<PollResult>,
    @Inject(ChatGateway) private chatcmd: ChatGateway,
    ) {

  }

  async create(createPollresultDto: CreatePollresultDto) {
    const createdPlresult = await new this.pollResultModel(createPollresultDto);
    const {_id} = createdPlresult;
    await this.chatcmd.handleNotifCMD('pollresult', _id.toString());
    return createdPlresult.save();
  }

  async findByGroup(pollGrp_id: string): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id }).exec();
  }

  async findByStatus(pollGrp_id: string, status: number, date_ini: number, date_end: number): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id, status, date_ini, date_end }).exec();
  }

  async findByDate(pollGrp_id: string, date_ini: number, date_end: number): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id, status, date_ini, date_end }).exec();
  }

  findAll() {
    return `This action returns all pollresult`;
  }

  async findOne(id: string) {
    return await this.pollResultModel.find({_id: id}).exec();
  }

  async update(id: string, updatePollresultDto: UpdatePollresultDto) {
    // const {pollsGrp_id} = updatePollresultDto;
    await this.chatcmd.handleNotifCMD('pollresult', id);
    return await this.pollResultModel.findByIdAndUpdate(id, updatePollresultDto);
  }

  async remove(id: string) {
    return await this.pollResultModel.findByIdAndRemove(id);
  }
}
