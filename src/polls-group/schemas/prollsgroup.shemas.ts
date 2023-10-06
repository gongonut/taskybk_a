/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type PollGrpDocument = HydratedDocument<PollsGroup>;

@Schema()
export class PollsGroup {

    @Prop({unique: true})
    id: string;

    @Prop()
    name: string; // Si empresa: Nombre empresa

    @Prop()
    client_id?: string; // Si es empresa

    @Prop()
    client_logo?: string;
    // name?: string; // Si es empresa

    @Prop()
    contacName?: string;

    @Prop()
    phones?: string;
    
    @Prop()
    age_from?: number;

    @Prop()
    age_to?: number;

    @Prop([Object])
    pollList: object[];

    @Prop()
    staffList: string[]; // Los Ids del staff

    @Prop()
    active?: boolean;

    @Prop([Object])
    children: object[];

    @Prop()
    parentRootNodeId?: string;

    @Prop()
    skills: string[]; // Lista de habilidades requeridas

    @Prop()
    geolocation?: string[];

    @Prop()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @Prop()
    stars?: number; // Minimo de estrellas del staff

    @Prop()
    ref: boolean; // En true consultar la base de datos

    /*
    @Prop({ type: {}, default: null })
    onStart?: OnStartEnd;

    @Prop({ type: {}, default: null })
    onEnd?: OnStartEnd;
    */
}

export const PollsGrpSchema = SchemaFactory.createForClass(PollsGroup);
