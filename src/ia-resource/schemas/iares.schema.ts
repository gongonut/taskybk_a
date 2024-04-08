/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


// Parent Schema
@Schema()
export class IAresource extends Document {

    @Prop()
    defcollection: string;

    @Prop()
    field_id: string;

    @Prop()
    content_route?: string;

    @Prop({default: 'TEXT'})
    type?: string; // DOC, EXCEL, PDF, TEXT texto

    
}
export const IAresourceSchema = SchemaFactory.createForClass(IAresource);
