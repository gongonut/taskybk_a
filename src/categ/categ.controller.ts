import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategService } from './categ.service';
import { CreateCategDto } from './dto/create-categ.dto';
import { UpdateCategDto } from './dto/update-categ.dto';

@Controller('categ')
export class CategController {
  constructor(private readonly categService: CategService) {}

  @Post()
  async create(@Body() createCategDto: CreateCategDto) {
    return await this.categService.create(createCategDto);
  }

  @Get()
  findAll() {
    return this.categService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategDto: UpdateCategDto) {
    return this.categService.update(+id, updateCategDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categService.remove(+id);
  }
}
