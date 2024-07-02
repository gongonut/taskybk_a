/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Chat extends Document {
    @Prop()
    dbState: number;
    @Prop()
    mycollection: string;
    @Prop()
    field_id: string;
    @Prop({ type: Object })
    userData: any;
    @Prop()
    usert_id: string;
    @Prop({ type: Object })
    data: any;
    @Prop()
    date: number;
    @Prop()
    save2DTB: boolean;
}
export const ChatSchema = SchemaFactory.createForClass(Chat);