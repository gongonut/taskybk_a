import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PollExecuteService } from './poll-execute.service';
import { CreatePollExecuteDto } from './dto/create-poll-execute.dto';
import { UpdatePollExecuteDto } from './dto/update-poll-execute.dto';

@Controller('poll-execute')
export class PollExecuteController {
  constructor(private readonly pollExecuteService: PollExecuteService) {}

  @Post()
  create(@Body() createPollExecuteDto: CreatePollExecuteDto) {
    return this.pollExecuteService.create(createPollExecuteDto);
  }

  @Get()
  findAll() {
    return this.pollExecuteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollExecuteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePollExecuteDto: UpdatePollExecuteDto) {
    return this.pollExecuteService.update(+id, updatePollExecuteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollExecuteService.remove(+id);
  }
}
