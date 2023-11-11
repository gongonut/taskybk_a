import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PollsGroupService } from './polls-group.service';
import { CreatePollsGroupDto } from './dto/create-polls-group.dto';
import { UpdatePollsGroupDto } from './dto/update-polls-group.dto';


@Controller('pollsgrp')
export class PollsGroupController {
  constructor(private readonly pollsGroupService: PollsGroupService) {}

  @Post()
  async create(@Body() createPollsGroupDto: CreatePollsGroupDto) {
    return await this.pollsGroupService.create(createPollsGroupDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.pollsGroupService.findById(id);
  }

  @Get('exported')
  findExported() {
    return this.pollsGroupService.findByExported();
  }

  @Get()
  findAll() {
    return this.pollsGroupService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePollsGroupDto: UpdatePollsGroupDto) {
    return this.pollsGroupService.update(id, updatePollsGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollsGroupService.remove(id);
  }
}
