import { Injectable } from '@nestjs/common';
import { CreateIoFileDto } from './dto/create-io-file.dto';
import { UpdateIoFileDto } from './dto/update-io-file.dto';

@Injectable()
export class IoFilesService {

    remove(filename: string) {
        // return this.IoFilesService.findByIdAndRemove(id);
      }
  
}
