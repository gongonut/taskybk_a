import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Chat, ChatSchema } from './schemas/chat.schema';
import { ChatGateway } from './chat.gateway';
import { ConfigModule } from '@nestjs/config';
import { AuthChatServices } from './jwt.authChatservices';
// import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // InMemoryDBModule.forRoot({})
  ],
  providers: [ChatGateway, AuthChatServices],
  exports: [ChatGateway]
})
export class ChatModule { }
