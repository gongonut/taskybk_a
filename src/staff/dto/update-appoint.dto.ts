import { PartialType } from '@nestjs/swagger';
import { CreateAppointDto } from './create-appoint.dto';

export class UpdateAppointDto extends PartialType(CreateAppointDto) {}
