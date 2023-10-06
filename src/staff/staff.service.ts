import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Staff } from './schemas/staff.schema';
import { Model } from 'mongoose';

@Injectable()
export class StaffService {

  constructor(@InjectModel(Staff.name) private staffModel: Model<Staff>) { }

  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const createdStaff = new this.staffModel(createStaffDto);
    return createdStaff.save();
  }

  async login(updateStaffDto: UpdateStaffDto): Promise<Staff> {
    const { email } = updateStaffDto;
    /*
    Es el correo maestro. Puede cambiarse desde env. Por el momento crea el campo si no existe
    en el futuro crea el campo y envía correo con nueva constraseña
    */
    if (process.env.MASTER_EMAIL === email) {
      updateStaffDto.names = process.env.MASTER_EMAIL;
      // let id = ObjectId  isValidObjectId(process.env.MASTER_EMAIL);
      const query = {email: process.env.MASTER_EMAIL}
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };
      return await this.staffModel.findOneAndUpdate(query, updateStaffDto, options);
      // return this. update(id, updateStaffDto);
    }
    // ......................
    return await this.staffModel.findById({ email }).exec();
  }

  // ........................................
  async findByActive(active: boolean): Promise<Staff[]> {
    return await this.staffModel.find({ active }).exec();
  }

  async findAll(): Promise<Staff[]> {
    // paginated
    return await this.staffModel.find().exec();
  }

  async findByStars(stars: number): Promise<Staff[]> {
    // paginated
    return await this.staffModel.find({ stars }).exec();
  }

  // ......................................................

  async findOne(id: string): Promise<Staff> {
    return await this.staffModel.findById(id).exec();
  }

  async update(id: string, updateStaffDto: UpdateStaffDto) {
    return await this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true });
  }

  async remove(id: string) {
    return await this.staffModel.findByIdAndRemove(id);
  }
}
