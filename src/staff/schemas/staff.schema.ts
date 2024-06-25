import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Appoint extends Document {
    @Prop()
    type: string;
    @Prop()
    datetime: number;
    @Prop()
    dateend: number;
    @Prop()
    staff_name: string;
    @Prop()
    contact?: string;
    @Prop()
    crm_costum_name?: string;
    @Prop()
    phone?: string;
    @Prop()
    email?: string;
    @Prop()
    pollresult_id?: string;
    @Prop()
    full?: boolean;
    @Prop()
    pollgrp_id?: string; // El id no _id
    @Prop()
    pollgrp_model_name?: string;
    @Prop()
    prod_list?: string[];
    @Prop()
    notes?: string;
    @Prop()
    ended: boolean;
    @Prop()
    address?: string;
    @Prop({ type: Object })
    geoLoc?: any;
    @Prop([{ type: Object }])
    defa_values?: any;
    @Prop()
    owner: string;
    @Prop()
    sche_schedule?: string;
    @Prop()
    sche_other?: number;
}
export const AppointSchema = SchemaFactory.createForClass(Appoint);

// export type StaffDocument = HydratedDocument<Staff>;

@Schema()
export class Staff extends Document {
    @Prop()
    active?: boolean;
    @Prop()
    address?: string;
    @Prop()
    age?: number;
    @Prop({ type: [AppointSchema], default: [] })
    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Appoint' })
    appoint?: [Appoint];
    @Prop()
    city?: string;
    @Prop()
    company_id?: string; // Nombre de la empresa a la que pertenece
    @Prop()
    elements?: string[]; // Lista de habilidades requeridas
    @Prop()
    email?: string;
    @Prop()
    id?: string;
    @Prop()
    legal_acceptance?: boolean;
    @Prop()
    legal_age?: boolean;
    @Prop()
    names?: string;
    @Prop()
    password?: string;
    @Prop()
    phone?: string;
    @Prop()
    picture?: string;
    @Prop()
    platform_phone?: string;
    @Prop()
    platform?: string; // nequi daviplata 
    @Prop()
    rol?: string[]
    @Prop()
    lastnames?: string;
    @Prop()
    skills?: string[]; // Lista de habilidades requeridas
    @Prop()
    stars?: number;
    @Prop()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;
    @Prop()
    tag?: string; // Información no importante 1: edit; 2: delete;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);

