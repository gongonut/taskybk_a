import { PartialType } from '@nestjs/swagger';
import { CreatePollExecuteDto } from './create-poll-execute.dto';

export class UpdatePollExecuteDto extends PartialType(CreatePollExecuteDto) {}
