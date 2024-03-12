import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Chat, ChatSchema } from './schemas/chat.schema';
//import { ChatGateway } from './chat.gateway';
import { ConfigModule } from '@nestjs/config';
// import { AuthChatServices } from './jwt.authChatservices';
// import { IAService } from './chatbot.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { Chat, ChatSchema } from './schemas/chat.schema';
import { ChatbotService } from './chatbot.service';
import { IAService } from './IA.service';
import { ChatbotController } from './chatbot.controller';
import { Chatbot, ChatbotSchema } from './schemas/chat.schema';
// import { ChatbotGateway } from './chatbot.gateway';
// import { BotService } from './IA.service';
// import { IAService } from './chatbot.service';
// import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Chatbot.name, schema: ChatbotSchema }
    ])
  ],
  controllers: [ChatbotController],
  providers: [ChatbotService, IAService],
})
export class ChatbotModule { }