import { Controller, Get, Body, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
// import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findOne() {
    return this.companyService.findOne();
  }

  @Put()
  update(@Body() updateGeneralDto: UpdateCompanyDto) {
    return this.companyService.update(updateGeneralDto);
  }

}
