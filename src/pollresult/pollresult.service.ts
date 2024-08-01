import { Inject, Injectable } from '@nestjs/common';
import { CreatePollresultDto } from './dto/create-pollresult.dto';
import { UpdatePollresultDto } from './dto/update-pollresult.dto';
import { PollResult } from './schemas/pollresult.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatGateway, DbState } from 'src/chat/chat.gateway';
import { Payload } from 'src/datatypes';
// import { DbState } from 'src/datatypes';
// import { CrmService } from 'src/crm/crm.service';

@Injectable()
export class PollresultService {

  constructor(
    @InjectModel(PollResult.name) private pollResultModel: Model<PollResult>,
    @Inject(ChatGateway) private chatcmd: ChatGateway,
    // @Inject(CrmService) private crmService: CrmService
  ) { }

  async create(createPollresultDto: CreatePollresultDto, user: Payload) {
    const newdPlresult = await new this.pollResultModel(createPollresultDto);
    const { _id, staff__id, pollGrp_id, status } = newdPlresult;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD(DbState.insert, 'pollresult', _id.toString(), user, staff__id, adata, false);
    return newdPlresult.save();
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
    return await this.pollResultModel.find({ pollGrp_id, date_ini, date_end }).exec();
  }

  findAll() {
    return `This action returns all pollresult`;
  }

  async findOne(id: string) {
    return await this.pollResultModel.findById(id).exec();
  }

  async update(id: string, updatePollresultDto: UpdatePollresultDto, user: any) {
    const { staff__id, pollGrp_id, status } = updatePollresultDto;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD(DbState.update, 'pollresult', id, user.id, staff__id, adata, false);
    if (updatePollresultDto.ended) {

    }
    updatePollresultDto.status_date = (new Date()).getTime();
    return await this.pollResultModel.findByIdAndUpdate(id, updatePollresultDto);
  }

  async updatePartial(id: string, data: any, user: any) {
    
    const { fieldName, stafft_id, chats, status, pollGrp_id, pollGrpName, staff_name, date_ini } = data;

    if (fieldName === 'status') {
      const adata = { status, pollGrp_id }
      await this.chatcmd.handleNotifCMD(DbState.update, 'pollresult', id, user, stafft_id, adata, false);
    } else {
      const msg = chats[chats.length - 1];
      const adata = { status, pollGrp_id, pollGrpName, staff_name, msg }
      await this.chatcmd.handleNotifCMD(DbState.update, 'chat', id, user, stafft_id, adata, false);
    }
    return await this.pollResultModel.findByIdAndUpdate(id, { $set: { date_ini, chats, status } });
  }

  updatePartGrp(pollGrp_id: string, data: any) {
    const { pollGrpLogo, pollGrpName } = data;
    return this.pollResultModel.updateMany({ pollGrp_id: pollGrp_id }, { $set: { pollGrpLogo: pollGrpLogo, pollGrpName: pollGrpName } })
  }

  async remove(id: string, user: Payload) {
    const newdPlresult = await this.pollResultModel.findById(id);
    const { _id, staff__id, pollGrp_id, status } = newdPlresult;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD(DbState.delete, 'pollresult', _id.toString(), user, staff__id, adata, false);
    return await this.pollResultModel.findByIdAndRemove(id);
  }

  async findByStaffResult(staff__id: string, status: number, date_ini: number, date_end: number) {
    // let result = [];
    const options = { status: status };
    options['staff__id'] = staff__id;
    if (date_ini > 0 && date_end > 0) {
      options['date_ini'] = { $gt: date_ini };
      options['date_end'] = { $lt: date_end };
    }
    const result = [];
    (await this.pollResultModel.find(options).sort({ 'date_ini': 1 }))
      .forEach(pr => {
        result.push({
          _id: pr._id,
          activity_logo: pr.pollGrpLogo || '',
          activity_name: pr.pollGrpName,
          crm_costum_name: pr.crm_costum_name || '',
          date_end: pr.date_end,
          date_ini: pr.date_ini,
          price: pr.price || 0,
          status: pr.status,
          status_date: pr.status_date,
        })
      });
    return { status: 200, data: result };
  }

  async findByAnalitic(crm: string, staff__idList: string[], pollGrpList: string[], costumList: string[], prodList: string[], date_ini: number, date_end: number) {
    // let result = [];
    const options = { status: { $gt: 1 } }; // status > 1 para q incluya que se están ejecutando
    if (date_ini > 0 && date_end > 0) {
      options['date_ini'] = { $gt: date_ini };
      options['date_end'] = { $lt: date_end };
    }

    if (staff__idList.length > 0) {
      options['staff__id'] = { $in: staff__idList };
    }

    if (pollGrpList.length > 0) {
      options['pollGrp_id'] = { $in: pollGrpList };
    }

    if (costumList.length > 0) {
      options['crm_costum_id'] = { $in: costumList };
    }

    if (prodList.length > 0) {
      options['crm_prod_id'] = { $in: prodList };
    }
    if (crm && crm === 'T') {
      return { status: 200, data: await this.result2crm(options) };
    } else {
      // result = await this.pollResultModel.find(options).sort({ 'date_ini': 1 });
      return { status: 200, data: await this.result2activity(options) };
    }
  }

  async result2crm(options: any) {
    const result = [];
    const headResult = {
      _id: 'text',
      date_ini: 'datetime-local',
      geoLocStart: 'geolocation',
      date_end: 'datetime-local',
      geoLocEnd: 'geolocation',
      tasker_id: 'text',
      tasker_name: 'text',
      activity_id: 'text',
      activity_name: 'text',
      costumer_name: 'text',
      crm_products: 'array'
    };
    (await this.pollResultModel.find(options).sort({ 'date_ini': 1 }))
      .forEach(pr => {
        result.push({
          _id: pr._id,
          date_ini: pr.date_ini,
          geoLocStart: pr.geoLocStart,
          date_end: pr.date_end || new Date().getTime(),
          geoLocEnd: pr.geoLocEnd,
          tasker_id: pr.staffId,
          tasker_name: pr.staff_name || 'Sin nombre',
          activity_id: pr.pollGrp_id,
          activity_name: pr.pollGrpName,
          costumer_name: pr.crm_costum_name,
          crm_products: pr.crm_prod_name,
          ended: pr.ended? true : false
        })
      });
    result.unshift(headResult);
    return result;
  }

  async result2activity(options: any) {
    const result = [];
    // const resultM = {};
    let headResult = {
      _id: {type: 'text', label: 'Id'},
      date_ini: {type: 'datetime-local', label: 'Fecha inicial'},
      geoLocStart: {type: 'geolocation', label: 'Localización inicial'},
      date_end: {type: 'datetime-local', label: 'Fecha Final'},
      geoLocEnd: {type: 'geolocation', label: 'Localización final'},
      tasker_name: {type: 'text', label: 'Tasker'},
    };
    // let varType = {};
    // let total = 0;
    // let header: any;
    (await this.pollResultModel.find(options).sort({ 'date_ini': 1 }))
      .forEach(pr => {
        const item = {
          _id: pr._id,
          date_ini: pr.date_ini,
          geoLocStart: pr.geoLocStart,
          date_end: pr.date_end,
          geoLocEnd: pr.geoLocEnd,
          tasker_name: pr.staff_name || 'Sin nombre',
          ...pr.values
        }
        result.push(item);
        // headResult = { ...headResult, ...item }
        headResult = { ...headResult, ...pr.values_type }
      });
    result.unshift(headResult);
    return result;
  }

  async getChat(id: string) {
    const plr = await this.pollResultModel.findById(id).exec();
    const json = plr.toJSON();
    // const {chats} = plr;
    return json.chats;
  }
}
