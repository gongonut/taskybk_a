/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CostumerDocument = HydratedDocument<Costumer>;

@Schema()
export class Costumer {
    @Prop()
    active: boolean;
    @Prop()
    name: string;
    @Prop()
    id: string;
    @Prop()
    email?: string;
    @Prop()
    linkup_1?: string;
    @Prop()
    phone_1?: string;
    @Prop()
    email_1?: string;
    @Prop()
    linkup_2?: string;
    @Prop()
    phone_2?: string;
    @Prop()
    email_2?: string;
    @Prop()
    address?: string;
    @Prop()
    city?: string;
    @Prop()
    state?: string;
    @Prop()
    country?: string;
    @Prop()
    zip?: string;
    @Prop({ type: Object })
    geoLoc?: any;
    @Prop()
    ownertype: string[];
}

export const CostumerSchema = SchemaFactory.createForClass(Costumer);