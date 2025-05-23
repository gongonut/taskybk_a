/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PollResultDocument = HydratedDocument<PollResult>;

@Schema()
export class PollResult {

    @Prop()
    allowDelete: boolean; // permite o no que se borre el formulario una vez creado

    @Prop({ type: [Object] })
    chats: any[];
    
    @Prop()
    crm_costum_id?: string;

    @Prop()
    crm_costum_name?: string;

    @Prop()
    crm_costum_contactname?: string;

    @Prop()
    crm_costum_contactmail?: string;

    @Prop()
    crm_prod_id?: string[]

    @Prop()
    crm_prod_name?: string[]

    // @Prop({ type: Object })
    // crm_prod_key: {key: string, value: string}[];

    @Prop({ type: Object })
    data?: any;

    @Prop()
    date_end_schedule: number;

    @Prop()
    date_end?: number;

    @Prop()
    date_ini?: number;

    @Prop()
    date_ini_schedule: number;

    @Prop()
    ended: boolean;

    @Prop({ type: Object })
    geoLocEnd?: any;

    @Prop({ type: Object })
    geoLocStart?: any;

    @Prop()
    newChat?: boolean;

    @Prop()
    platform?: string;

    @Prop()
    pollGrpLogo: string;

    @Prop()
    pollGrpName: string;

    // https://www.youtube.com/watch?v=o7dZWGiXcA8
    // @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'PollGroups'})
    @Prop()
    pollGrp_id: string; // _id del PollGroups

    @Prop()
    price?: number;

    // https://www.youtube.com/watch?v=o7dZWGiXcA8
    // @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Staff'})
    @Prop()
    staff_id: string; // _id del Staff

    @Prop()
    staff_admin_id: string; // administrador responsable

    @Prop()
    staff__id?: string; // _id del staff

    @Prop()
    staffId?: string;

    @Prop()
    staff_name?: string;

    @Prop()
    staff_picture?: string;

    @Prop()
    staff_star?: number;

    @Prop()
    status_date: number;

    @Prop()
    status: number; // 0: Ninguno, 1: Seleccionado, 2: En proceso, 3: Finalizado 4:Aprobado 5:pagado

    /*
    @Prop()
    titleAsHeader: boolean; // usar label como encabezado de columna
    */

    @Prop({ type: Object })
    values?: { [index: string]: any };

    @Prop({ type: Object })
    values_type?: { [index: string]: any };

    @Prop({ type: Object })
    metaValues?: { [index: string]: any };

    @Prop({ type: Object })
    evidenceValues: { [index: string]: any };

    @Prop()
    attachfiles?: string[];
}

export const PollsResultSchema = SchemaFactory.createForClass(PollResult);
