/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {

    @Prop()
    id: string;

    @Prop()
    name?: string;

    @Prop()
    logo?: string;

    @Prop()
    site?: string;

    @Prop()
    phone?: string;

    @Prop()
    address?: string;

    @Prop()
    email?: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
