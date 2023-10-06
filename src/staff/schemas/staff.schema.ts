/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StaffDocument = HydratedDocument<Staff>;

@Schema()
export class Staff {

  @Prop()
    uid?: string;

    @Prop()
    id?: string;

    @Prop()
    names?: string;

    @Prop()
    second_names?: string;

    @Prop()
    picture?: string;

    @Prop()
    age?: number;

    @Prop()
    address?: string;

    @Prop()
    skills?: string[]; // Lista de habilidades requeridas

    @Prop()
    elements?: string[]; // Lista de habilidades requeridas

    @Prop()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @Prop()
    phone?: string;

    @Prop()
    platform?: string; // nequi daviplata 

    @Prop()
    platform_phone?: string;

    @Prop()
    stars?: number;

    @Prop()
    active?: boolean;

    @Prop({unique: true})
    email: string;

    @Prop()
    legal_age?: boolean;

    @Prop()
    company_id?: string; // Nombre de la empresa a la que pertenece

    @Prop()
    legal_acceptance?: boolean;

    @Prop()
    tag?: string; // Información no importante 1: edit; 2: delete;

  
}

export const StaffSchema = SchemaFactory.createForClass(Staff);
