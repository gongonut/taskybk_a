import { Controller, Get, Post, Body, Param, Delete, Put, Query, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { User } from './user.decorator';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) { }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createStaffDto: CreateStaffDto, @User() user: any) {
    return this.staffService.create(createStaffDto, user);
  }

  @Post('login')
  login(@Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.login(updateStaffDto);
  }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Get('filter/data?')
  findByQuery(@Query() filterQuery: any) {
    return this.staffService.findByQueryFilter(filterQuery);
  }

  // ........................... LISTADO DE STAFF EN EXCEL ............................

  @Roles('P')
  @UseGuards(RolesGuard)
  @Post('excel2Staff')
  @UseInterceptors(
    FileInterceptor(
      'file', {
      storage: diskStorage({
        destination: '.catalog/',
        filename: function (_req, _file, cb) { cb(null, 'catalog.xlsx') }
      }),
    }
    )
  )
  async excel2Staff(@UploadedFile() file: Express.Multer.File) {
    await this.staffService.excel2Staff(file);
  }

  // .......................................................................................

  @Roles('A')
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Roles('A')
  @UseGuards(RolesGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto, @User() user: any) {
    return this.staffService.update(id, updateStaffDto, user);
  }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string,  @User() user: any) {
    return this.staffService.remove(id, user);
  }
}
