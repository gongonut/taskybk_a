import { PartialType } from '@nestjs/swagger';
import { CreateChatDto } from './create-chat.dto';
// import { CreateChatDto } from './create-chatbot.dto';

export class UpdateChatbotDto extends PartialType(CreateChatDto) {}