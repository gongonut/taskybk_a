import { Controller, Get, Post, Body, Param, Delete, Res, UseInterceptors, UploadedFiles, Put, Query } from '@nestjs/common';
import { CategService } from './categ.service';
import { CreateCategDto } from './dto/create-categ.dto';
import { UpdateCategDto } from './dto/update-categ.dto';
import { join } from 'path';
import * as fs from 'fs';
import { Observable, of } from 'rxjs';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('categ')
export class CategController {
  constructor(private readonly categService: CategService) {}

  @Get('picture/:imagename')
  getImageByName(@Param('imagename') imagename, @Res() res): Observable<object> {
    const upr = imagename.toUpperCase().split('__');
    let apath = process.env.RAILWAY_VOLUME_MOUNT_PATH;
    if (process.env.DEV_STATUS === 'true') {
      apath = join(__dirname, process.env.DEFA_DIR);
    }
    apath = join(apath, upr[0], upr[1]);

    return of(res.sendFile(apath));
  }

  @Post('pictures')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles1(@UploadedFiles() files: Array<Express.Multer.File>) {
    const resultpath: string[] = [];
    let apath = process.env.RAILWAY_VOLUME_MOUNT_PATH;
    if (process.env.DEV_STATUS === 'true') {
      apath = join(__dirname, process.env.DEFA_DIR);
      if (!fs.existsSync(apath)) { fs.mkdirSync(apath); }
    }
    const dir = files[0].originalname.toUpperCase();
    apath = join(apath, dir);
    if (!fs.existsSync(apath)) { fs.mkdirSync(apath); }
    for (let i = 1; i < files.length; i++) {
      const upr = files[i].originalname.toUpperCase();
      const destPath = join(apath, upr);
      fs.writeFileSync(destPath, files[i].buffer);
      resultpath.push(destPath);
    }
    return { status: 200, message: resultpath }
  }

  @Post()
  async create(@Body() createCategDto: CreateCategDto) {
    return await this.categService.create(createCategDto);
  }

  @Get('short')
  async findAllShort() {
    return await this.categService.findAllShort();
  }

  @Get('list?')
  async findList(@Query() filterQuery: any) {
    return await this.categService.findList(filterQuery);
  }

  @Get()
  findAll() {
    return this.categService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategDto: UpdateCategDto) {
    return this.categService.update(id, updateCategDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categService.remove(id);
  }
}
