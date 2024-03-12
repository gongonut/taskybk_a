// import  RequestWithUser  from 'src/auth/requestWithUser.interface';
// import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
// import { CreateChatDto } from './dto/create-chatbot.dto';
// import { ChatsService } from './chats.service';
import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { RolesGuard } from 'src/staff/roles.guard';
import { User } from 'src/staff/user.decorator';
import { ChatbotService } from './chatbot.service';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { Roles } from 'src/staff/roles.decorator';
// import { IAService } from './chatbot.service';
// import { ChatbotService } from './chatbot.service';
// import { ChatService } from './chat.service';

@Controller('chat')
export class ChatbotController {
    constructor(private chatbotService: ChatbotService) {}

    @Roles('A')
    @UseGuards(RolesGuard)
    @Post()
    async newMessage(@Body() message: CreateChatbotDto, @User() user: any) {
        const userId = user.id;
        return this.chatbotService.newChatMessage(message, userId)
    }


    @UseGuards(RolesGuard)
    @Get() 
    async getAllMessages() {
        return this.chatbotService.getAllMessages()
    }
}
