import { Module } from '@nestjs/common';
import { PollsGroupService } from './polls-group.service';
import { PollsGroupController } from './polls-group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {PollsGroup , PollsGrpSchema } from './schemas/prollsgroup.shemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PollsGroup.name, schema: PollsGrpSchema }]),
  ],
  controllers: [PollsGroupController],
  providers: [PollsGroupService],
})
export class PollsGroupModule {}
