import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatbotDocument = HydratedDocument<Chatbot>;

@Schema()
export class Chatbot {

    @Prop()
    date_ini: number;

    @Prop()
    date_end: number;

    @Prop()
    agents?: string[]; // _id de los agentes que intervienen

    @Prop()
    clients?: string[]; // _id de los clientes

    @Prop({ type: [Object] })
    chats: any[];

    @Prop()
    room: string;

}

export const ChatbotSchema = SchemaFactory.createForClass(Chatbot);