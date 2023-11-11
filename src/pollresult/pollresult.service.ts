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
    const { _id, pollGrpName, staff__id, staff_name } = createdPlresult;
    await this.chatcmd.handleNotifCMD('pollresult', _id.toString(), pollGrpName, staff__id, staff_name);
    return createdPlresult.save();
  }

  async findByGroup(pollGrp_id: string): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id: pollGrp_id }).exec();
  }

  async findByStatus(pollGrp_id: string, status: number, date_ini: number, date_end: number): Promise<PollResult[]> {
    if (date_ini === 0 && date_end === 0) {
      return await this.pollResultModel.find({ pollGrp_id: pollGrp_id, status: status }).exec();
    }
    return await this.pollResultModel.find({ pollGrp_id, status, date_ini: { '$gt': date_ini }, date_end: { '$lt': date_end } }).exec();
  }

  async findByDate(pollGrp_id: string, date_ini: number, date_end: number): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id, status, date_ini, date_end }).exec();
  }

  findAll() {
    return `This action returns all pollresult`;
  }

  async findOne(id: string) {
    return await this.pollResultModel.findById(id).exec();
  }

  async update(id: string, updatePollresultDto: UpdatePollresultDto) {
    const { pollGrpName, staff__id, staff_name } = updatePollresultDto;
    await this.chatcmd.handleNotifCMD('pollresult', id, pollGrpName, staff__id, staff_name);
    return await this.pollResultModel.findByIdAndUpdate(id, updatePollresultDto);
  }

  async remove(id: string) {
    return await this.pollResultModel.findByIdAndRemove(id);
  }

  async findByAnalitic(pollGrpList: string[], date_ini: number, date_end: number) {
    const result = [];
    if (date_ini === 0 && date_end === 0) {
      (await this.pollResultModel.find({ pollGrp_id: { $in: pollGrpList } }))
        .forEach(pr => {
          result.push({
            _id: pr._id,
            id: pr.id,
            date_ini: pr.date_ini,
            date_end: pr.date_end,
            pollGrp_id: pr.pollGrp_id,
            pollGrp_name: pr.pollGrpName,
            staff__id: pr.staff__id,
            staff_name: pr.staff_name
          })
        });
    } else {
      (await this.pollResultModel.find({ pollGrp_id: { $in: pollGrpList }, status: { $gt: 2 }, date_ini: { $gt: date_ini }, date_end: { '$lt': date_end } }))
        .forEach(pr => {
          result.push({
            _id: pr._id,
            id: pr.id,
            date_ini: pr.date_ini,
            date_end: pr.date_end,
            pollGrp_id: pr.pollGrp_id,
            pollGrp_name: pr.pollGrpName,
            staff__id: pr.staff__id,
            staff_name: pr.staff_name
          })
        });
    }
    return { status: 200, data: result };
  }

}
