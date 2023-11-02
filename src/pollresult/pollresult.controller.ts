import { Controller, Get, Post, Body, Param, Delete, Query, Put, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PollresultService } from './pollresult.service';
import { CreatePollresultDto } from './dto/create-pollresult.dto';
import { UpdatePollresultDto } from './dto/update-pollresult.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import * as fs from 'fs';

@Controller('pollresult')
export class PollresultController {
  constructor(private readonly pollresultService: PollresultService) { }

  @Post()
  create(@Body() createPollresultDto: CreatePollresultDto) {
    return this.pollresultService.create(createPollresultDto);
  }

  @Get('filter/data?')
  async findByFilter(
    @Query('filter') filter: number,
    @Query('status') status: number,
    @Query('pollGrp_id') pollGrp_id: string,
    @Query('date_ini') date_ini: number,
    @Query('date_end') date_end: number,
  ) {
    switch (filter) {
      case 0: // all
        return await this.pollresultService.findByGroup(pollGrp_id);
        break;
      case 1: // status
        return await this.pollresultService.findByStatus(pollGrp_id, status, date_ini, date_end);
        break;
      case 2: // date all
        return await this.pollresultService.findByDate(pollGrp_id, date_ini, date_end);
        break;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pollresultService.findOne(id);
  }

  @Get()
  findAll() {
    return this.pollresultService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePollresultDto: UpdatePollresultDto) {
    return this.pollresultService.update(id, updatePollresultDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.pollresultService.remove(id);
  }

  @Post('pictures1')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles1(@UploadedFiles() files: Array<Express.Multer.File>) {
    //fs.rmSync(join('files','images'), { recursive: true, force: true });
    //fs.mkdirSync(join('files', 'images'));
    let apath = '';
    files.forEach(async image => {
      const upr = image.originalname.toUpperCase();
      apath = join(__dirname, '/files' , upr);
      fs.writeFileSync(apath, image.buffer);
    })
    return { status: 200, message: apath }
  }

  @Post('pictures2')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles2(@UploadedFiles() files: Array<Express.Multer.File>) {
    //fs.rmSync(join('files','images'), { recursive: true, force: true });
    //fs.mkdirSync(join('files', 'images'));
    let apath = '';
    files.forEach(async image => {
      const upr = image.originalname.toUpperCase();
      apath = join('/files' , upr);
      fs.writeFileSync(apath, image.buffer);
    })
    return { status: 200, message: apath }
  }

}
