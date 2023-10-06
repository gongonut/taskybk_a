import { Injectable } from '@nestjs/common';
import { CreatePollExecuteDto } from './dto/create-poll-execute.dto';
import { UpdatePollExecuteDto } from './dto/update-poll-execute.dto';

@Injectable()
export class PollExecuteService {
  create(createPollExecuteDto: CreatePollExecuteDto) {
    return 'This action adds a new pollExecute';
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
