import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { Workbook } from 'exceljs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
// import { Category } from 'src/categ/schemas/categ.schema';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    // @InjectModel(Category.name) private readonly categModel: Model<Category>,
    private jwtAuthServ: JwtService) { }

  async create(createProductDto: CreateProductDto) {
    const createdProduct = await new this.productModel(createProductDto);
    // createdProduct.id = createProductDto._id;
    return await createdProduct.save();
  }

  async excel2Product(file: Express.Multer.File) {
    const thisArray: Product[] = [];
    // const pictArray: string[] = [];
    const workbook = new Workbook();
    await workbook.xlsx.readFile(file.path).then((workbook) => {
      const worksheetProd = workbook.getWorksheet("staff");
      const headerRows = 2;
      const staffRowC = worksheetProd.actualRowCount; // determine the range of populated data
      for (let i = headerRows; i <= staffRowC; i++) {
        const formData = {
          'id': worksheetProd.getRow(i).getCell(1).text || '',
          'name': worksheetProd.getRow(i).getCell(2).text || '',
          'description': worksheetProd.getRow(i).getCell(3).text || '',
          'parent_id': ''
        }
        thisArray.push(formData as unknown as Product);
      }
    });
    await this.productModel.deleteMany();
    await this.productModel.insertMany(thisArray).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });

  }

  findAll() {
    // const all = await this.productModel.find();
    // return all;
    return this.productModel.find().exec();
  }

  findAllParent() {
    // const all = await this.productModel.find();
    // return all;
    return this.productModel.find({ parent_id: '' }).exec();
  }

  findSubproduct(parent_id: string) {
    // const all = await this.productModel.find();
    // return all;
    return this.productModel.find({ 'parent_id': parent_id }).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    // return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });
    return this.productModel.replaceOne({ _id: id }, updateProductDto, { upsert: true });
  }

  async remove(id: string) {
    return await this.productModel.findByIdAndRemove(id);
  }
}
