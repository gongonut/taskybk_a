import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Chatbot {

    @Prop()
    date_ini: number;

    @Prop()
    date_end: number;

    @Prop()
    agents?: string[]; // _id de los AI agentes o administradores que intervienen

    @Prop()
    clients?: string[]; // _id de los clientes

    @Prop({ type: [Object] })
    chats: any[];

    @Prop()
    room: string; // topic, time

}

export const ChatbotSchema = SchemaFactory.createForClass(Chatbot);