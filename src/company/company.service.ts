import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './schemas/company.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>
  ) { }

  async findOne() {
    const company = await this.companyModel.findOne({ id: 'only' });
    if (!company) {
      const companyData: CreateCompanyDto = { id: 'only' };
      const createdCompany = await new this.companyModel(companyData);
      return await createdCompany.save();
    }
    return company;
  }

  async update(updateGeneralDto: UpdateCompanyDto) {
    return await this.companyModel.findOneAndUpdate({ id: 'only' }, updateGeneralDto, { new: true });
  }

  /*
  async pollgrp_new_id() {
    // return await this.generalModel.findByIdAndUpdate(id, updateQuoteDto, {new: true} );
    const company = await this.companyModel.findOne({ id: 'only' });
    if (company) {
      if (company.pollgrp_ctv) { company.pollgrp_ctv++; } else { company.pollgrp_ctv = 1; }
      await this.companyModel.replaceOne({ id: 'only' }, company, { upsert: true })};
      return company.pollgrp_ctv;
  }
  */

}
