import { Module } from '@nestjs/common';
import { PollresultService } from './pollresult.service';
import { PollresultController } from './pollresult.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PollResult, PollsResultSchema } from './schemas/pollresult.schema';
import { ChatModule } from 'src/chat/chat.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PollResult.name, schema: PollsResultSchema }]),
    ChatModule
  ],
  controllers: [PollresultController],
  providers: [PollresultService],
})
export class PollresultModule {}
