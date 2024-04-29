import { Injectable } from '@nestjs/common';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Workbook } from 'exceljs';
import { Costumer } from './schemas/costumer.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CostumerService {

  constructor(@InjectModel(Costumer.name) private costumerModel: Model<Costumer>,
    private jwtAuthServ: JwtService) { }

  async create(createCostumerDto: CreateCostumerDto) {
    const createdProduct = await new this.costumerModel(createCostumerDto);
    return await createdProduct.save();
  }

  async excel2Costum(file: Express.Multer.File) {
    // console.log(file);
    const thisArray: Costumer[] = [];
    // const pictArray: string[] = [];
    const workbook = new Workbook();
    await workbook.xlsx.readFile(file.path).then((workbook) => {
      const worksheetCostum = workbook.getWorksheet('staff');
      const headerRows = 2;
      const staffRowC = worksheetCostum.actualRowCount; // determine the range of populated data
      for (let i = headerRows; i <= staffRowC; i++) {
        const formData = {
          'active': worksheetCostum.getRow(i).getCell(1).text || 'true',
          'name': worksheetCostum.getRow(i).getCell(2).text || '',
          'id': worksheetCostum.getRow(i).getCell(3).text || '',
          'linkup_1': worksheetCostum.getRow(i).getCell(4).text || '',
          'phone_1': worksheetCostum.getRow(i).getCell(5).text || '',
          'email_1': worksheetCostum.getRow(i).getCell(6).text || '',
          'linkup_2': worksheetCostum.getRow(i).getCell(7).text || '',
          'phone_2': worksheetCostum.getRow(i).getCell(8).text || '',
          'email_2': worksheetCostum.getRow(i).getCell(9).text || '',
          'address': worksheetCostum.getRow(i).getCell(10).text || '',
          // 'email': worksheetCostum.getRow(i).getCell(10).value,
        }
        thisArray.push(formData as unknown as Costumer);
      }
    });
    await this.costumerModel.deleteMany();
    await this.costumerModel.insertMany(thisArray).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });
  }

  findAll() {
    return this.costumerModel.find().exec();
  }

  findActive() {
    return this.costumerModel.find({ active: true}).exec();
  }

  async findOne(id: string) {
    return await this.costumerModel.findOne({id}).exec();
  }

  update(id: number, updateCostumerDto: UpdateCostumerDto) {
    return `This action updates a #${id} costumer`;
  }

  remove(id: number) {
    return `This action removes a #${id} costumer`;
  }
}
