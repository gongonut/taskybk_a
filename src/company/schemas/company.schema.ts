/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/*
@Schema({ _id: false })
export class Jobs {
    @Prop({ required: true })
    codigo: string;

    @Prop()
    title: string;
}
const JobsSchema = SchemaFactory.createForClass(Jobs);
*/

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

    @Prop()
    jobs: object[];

    /*
    @Prop({ type: JobsSchema })
    jobs: Jobs[];
    */

}

export const CompanySchema = SchemaFactory.createForClass(Company);
