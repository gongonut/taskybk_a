import { Module } from '@nestjs/common';
import { PollExecuteService } from './poll-execute.service';
import { PollExecuteController } from './poll-execute.controller';

@Module({
  controllers: [PollExecuteController],
  providers: [PollExecuteService],
})
export class PollExecuteModule {}
