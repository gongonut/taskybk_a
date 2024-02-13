import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Staff } from './schemas/staff.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { Workbook } from 'exceljs';
import { ChatGateway, DbState } from 'src/chat/chat.gateway';
import { Payload } from 'src/datatypes';
// import { DbState } from 'src/datatypes';

@Injectable()
export class StaffService {

  constructor(
    @InjectModel(Staff.name) private staffModel: Model<Staff>,
    @Inject(ChatGateway) private chatcmd: ChatGateway,
    private jwtAuthServ: JwtService) { }

  async create(createStaffDto: CreateStaffDto, user: Payload): Promise<Staff> {
    const createdStaff = new this.staffModel(createStaffDto);

    const { _id, names, second_names  } = createdStaff;
    const adata = { names, second_names }
    await this.chatcmd.handleNotifCMD(DbState.insert, 'staff', _id.toString(), user, _id.toString(), adata);
    return createdStaff.save();
  }

  async login(updateStaffDto: CreateStaffDto) {
    const { email, password } = updateStaffDto;
    /*
    Es el correo maestro. Puede cambiarse desde env. Por el momento crea el campo si no existe
    en el futuro crea el campo y envía correo con nueva constraseña
    */
    if (process.env.MASTER_EMAIL === email) {
      updateStaffDto.names = process.env.MASTER_EMAIL;
      updateStaffDto.active = true;
      // updateStaffDto.password = '';
      updateStaffDto.rol = ['K', 'P', 'F', 'U', 'D', 'A'];
      // let id = ObjectId  isValidObjectId(process.env.MASTER_EMAIL);
      const query = { email: process.env.MASTER_EMAIL }
      // Por ahora agrego password pero en el futuro podrá ser solo el correo
      updateStaffDto.password = 'abcd0123';
      const plainToHash = await hash(password, Number(process.env.HASH));
      updateStaffDto = { ...updateStaffDto, password: plainToHash };
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };
      updateStaffDto = await this.staffModel.findOneAndUpdate(query, updateStaffDto, options);
      // updateStaffDto.password = 'ABCDEFGH'; // Ahora pasa el proceso
      // return this. update(id, updateStaffDto);
    }
    // ......................
    // return await this.staffModel.findOne({ email: email }).exec();


    // const {email, password} = updateStaffDto;
    const userStaff = await this.staffModel.findOne({ email });
    if (!userStaff) throw new HttpException('USER_NOT_FOUND', 404);
    // Si está bacío Asigna el nuevo password
    if (!userStaff.password || userStaff.password.length === 0) {
      if (!(updateStaffDto.password && updateStaffDto.password.length >= 4)) throw new HttpException('PASSWORD_NOT_PROVIDED', 405);
      const plainToHash = await hash(password, Number(process.env.HASH));
      updateStaffDto = { ...updateStaffDto, password: plainToHash };
      return this.staffModel.findByIdAndUpdate(userStaff._id, updateStaffDto).exec();
    }
    const checkPass = await compare(password, userStaff.password);
    if (!checkPass) throw new HttpException('INVALID_PASSWORD', 403);

    const payload: Payload = { id: userStaff._id.toString(), name: userStaff.names, rol: userStaff.rol }
    //     const token = await this.jwtAuthServ.signAsync(payload);
    const token = this.jwtAuthServ.sign(payload);
    const data = { userStaff, token };
    return data;
  }

  // ........................................
  findByActive(active: boolean, arol: string): Promise<Staff[]> {
    return this.staffModel.find({ active, rol: { $in: [arol] } }).exec();
  }

  findAll(): Promise<Staff[]> {
    // paginated
    return this.staffModel.find().exec();
  }

  findByStars(stars: number, arol: string): Promise<Staff[]> {
    // paginated
    return this.staffModel.find({ active: true, stars, rol: { $in: arol } }).exec();
  }

  findByQueryFilter(filterQuery: any): Promise<Staff[]> {
    const { queryType, active, age_from, age_to, city, rol, stars, studyLevel, email } = filterQuery;
    const options = {};
    switch (queryType) {
      case '0':
        return this.staffModel.find().exec();
        break;
      case '1': // Active
        options['active'] = active;
        break;
      case '2': // stars
        options['active'] = true;
        options['stars'] = stars;
        break;
      case '3': // Full
        // options['active'] = true;
        if (active) { options['active'] = active }
        if (age_from && age_to) {
          options['age'] = { $gt: age_from };
          options['age'] = { $lt: age_to };
        }
        if (city && city.length > '') {
          const aCity = city.split[','];
          options['city'] = { $in: aCity };
        }
        if (studyLevel != null) {
          options['studyLevel'] = studyLevel;
        }
        if(rol) {
          options['rol'] = {$in: rol};
        }
        if(stars) {
          options['stars'] = stars;
        }
        if (email) {options['email'] = email;}
        break;
      case '4': // rol
        options['rol'] = { $in: rol };
        break;
      case '5': // correo
        options['email'] = email;
        break;
    }
    return this.staffModel.find(options)
  }

  // ......................................................

  async findOne(id: string): Promise<Staff> {
    return await this.staffModel.findById(id).exec();
  }

  async update(id: string, updateStaffDto: UpdateStaffDto, user: Payload) {
    
    const { names, second_names  } = updateStaffDto;
    const adata = { names, second_names }
    await this.chatcmd.handleNotifCMD(DbState.update, 'staff', id, user, id, adata);

    return await this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true });
  }

  async remove(id: string, user: Payload) {

    // const { names, second_names  } = updateStaffDto;
    const adata = { id }
    await this.chatcmd.handleNotifCMD(DbState.delete, 'staff', id, user, id, adata);

    return await this.staffModel.findByIdAndRemove(id);
  }

  // ........................... IMPORT FROM EXCEL ................

  async excel2Staff(file: Express.Multer.File) {
    const staffArray: Staff[] = [];
    // const pictArray: string[] = [];
    const workbook = new Workbook();
    await workbook.xlsx.readFile(file.path).then((workbook) => {
      const worksheetStaff = workbook.getWorksheet("staff");
      const headerRows = 2;
      const staffRowC = worksheetStaff.actualRowCount; // determine the range of populated data
      for (let i = headerRows; i <= staffRowC; i++) {
        const formData = {
          'active': true,
          'email': worksheetStaff.getRow(i).getCell(5).value,
          'id': worksheetStaff.getRow(i).getCell(3).value,
          'names': worksheetStaff.getRow(i).getCell(1).value,
          'phone': worksheetStaff.getRow(i).getCell(6).value,
          'rol': worksheetStaff.getRow(i).getCell(7).value.toString().split(',').push('A'),
          'second_names': worksheetStaff.getRow(2).getCell(7).value
        }
        staffArray.push(formData as unknown as Staff);
      }
    });
    await this.staffModel.deleteMany();
    await this.staffModel.insertMany(staffArray).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });

  }
}
