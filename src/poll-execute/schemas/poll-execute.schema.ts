/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type PollExecuteDocument = HydratedDocument<PollExecute>;

@Schema()
export class PollExecute {

    @Prop()
    active?: boolean;

    @Prop()
    age_from?: number;

    @Prop()
    age_to?: number;

    @Prop()
    age?: number;

    @Prop()
    chats?: object[];

    @Prop()
    children: object[];

    @Prop()
    client_id?: string; // Si es empresa

    @Prop()
    client_logo?: string;

    @Prop()
    contact_name?: string;

    @Prop()
    date_end?: number;

    @Prop()
    date_ini?: number;

    @Prop()
    description?: string;

    @Prop()
    done: boolean; // Se usa en el tasker como referencia

    @Prop()
    endtimer?: number; // Duración de la entrevista

    @Prop()
    executed?: number; // Ejecutadas

    @Prop()
    flags?: string; // Por ejemplo DEL significa borrar

    @Prop()
    geolocation?: string[];

    @Prop()
    id: string;

    @Prop()
    model_name?: string; // Si es empresa

    @Prop()
    name: string; // Si empresa: Nombre empresa

    @Prop({ type: Object })
    onEnd?: any;

    @Prop({ type: Object })
    onStart?: object;

    @Prop()
    parentRootNodeId?: string;

    @Prop()
    payxpoll: number; // Pago por encuesta

    @Prop()
    phones?: string;

    @Prop()
    pollList: object[];

    @Prop()
    pollResultId?: string;
    
    @Prop()
    ref: boolean; // En true consultar la base de datos

    @Prop()
    skills: string[]; // Lista de habilidades requeridas

    @Prop()
    staffList: string[]; // Los Ids del staff

    @Prop()
    stars?: number; // Minimo de estrellas del staff

    @Prop()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @Prop()
    total?: number; // Total de encuestas requeridas

    @Prop()
    isheader: boolean;
    
}

export const PollsExecuteSchema = SchemaFactory.createForClass(PollExecute);
