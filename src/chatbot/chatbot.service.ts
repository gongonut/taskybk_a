import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import { Chat, ChatDocument } from './schemas/chat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Chatbot } from './schemas/chat.schema';
import { CreateChatbotDto } from './dto/create-chatbot.dto';

@Injectable()
export class ChatbotService {
    constructor(@InjectModel(Chatbot.name) private chatModel: Model<Chatbot>) {}

    
    async newChatMessage(chatbotMessage: CreateChatbotDto, userId: string) {
        const newMessage = new this.chatModel({...chatbotMessage, userId})
        await newMessage.save
        return newMessage
    }

    /*
    async updateChatMessage(chatMessage: UpdateChatbotDto, userId: string) {
        
    }
    */

    async getAllMessages() {
        return this.chatModel.find().populate('user')
    }

    
}