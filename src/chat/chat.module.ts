import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Chat, ChatSchema } from './schemas/chat.schema';
import { ChatGateway, ChatService } from './chat.gateway';
import { ConfigModule } from '@nestjs/config';
import { AuthChatServices } from './jwt.authChatservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './schemas/chat.schema';
// import { IAService } from './chatbot.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Chat, ChatSchema } from '../chatbot/schemas/chat.schema';
// import { ChatbotService } from '../chatbot/chatbot.service';
// import { IAService } from '../chatbot/IA.service';
// import { ChatbotController } from '../chatbot/chatbot.controller';
// import { BotService } from './IA.service';
// import { IAService } from './chatbot.service';
// import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }])],
  providers: [ChatService, ChatGateway, AuthChatServices],
  exports: [ChatGateway]
})
export class ChatModule { }
