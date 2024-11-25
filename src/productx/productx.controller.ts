import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductxService } from './productx.service';
import { CreateProductxDto } from './dto/create-productx.dto';
import { UpdateProductxDto } from './dto/update-productx.dto';

@Controller('productx')
export class ProductxController {
  constructor(private readonly productxService: ProductxService) {}

  @Post()
  create(@Body() createProductxDto: CreateProductxDto) {
    return this.productxService.create(createProductxDto);
  }

  @Get()
  findAll() {
    return this.productxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductxDto: UpdateProductxDto) {
    return this.productxService.update(+id, updateProductxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productxService.remove(+id);
  }
}
