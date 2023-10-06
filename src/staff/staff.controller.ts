import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) { }

  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Post('login')
  login(@Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.login(updateStaffDto);
  }

  @Get()
  findByQuery(@Query() filterQuery) {
    const { queryType, data } = filterQuery;
    const adata = JSON.parse(data);
    switch (queryType) {
      case 0: // Active
        return this.staffService.findByActive(adata);
        break;
      case 1: // stars
        return this.staffService.findByStars(adata);
        break;

    }
    return this.staffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
