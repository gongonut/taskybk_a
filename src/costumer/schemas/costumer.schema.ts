/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

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
}

export const CostumerSchema = SchemaFactory.createForClass(Costumer);