import { Module } from '@nestjs/common';
import { PollExecuteService } from './poll-execute.service';
import { PollExecuteController } from './poll-execute.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PollExecute, PollsExecuteSchema } from './schemas/poll-execute.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PollExecute.name, schema: PollsExecuteSchema }])
  ],
  controllers: [PollExecuteController],
  providers: [PollExecuteService],
})
export class PollExecuteModule { }
