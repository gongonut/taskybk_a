import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Products extends Document {
    @Prop()
    prod_id?: string;
    @Prop()
    prod_name?: string;
    @Prop()
    prod_price?: number;
    @Prop()
    prod_picture?: string;
    @Prop()
    prod_quantity?: number;
    @Prop()
    prod_total?: number;
    @Prop()
    prod_tax_p?: number;
    @Prop()
    prod_notes?: string;
    @Prop()
    prod_opinion?: string;
    @Prop()
    prod_opinion_rating?: number;
    @Prop()
    who_id?: string;
    @Prop()
    who_name?: string;
    @Prop()
    who_email?: string;
    @Prop()
    who_phone?: string;
    @Prop()
    who_picture?: string;

    /*
    @Prop({ type: Object })
    selectlist?: string[]; // Activa selección
    */
}
export const ProductsSchema = SchemaFactory.createForClass(Products);

@Schema()
export class Sell extends Document {

    @Prop()
    date?: number;
    @Prop()
    dateend?: number;
    @Prop()
    staff_name?: string;
    @Prop()
    staff_id?: string;
    @Prop()
    costumer_id?: string;
    @Prop()
    costumer_name?: string;
    @Prop()
    costumer_email?: string;
    @Prop()
    costumer_phone?: string;
    @Prop()
    costumer_address?: string;
    @Prop()
    costumer_city?: string;
    @Prop()
    costumer_state?: string;
    @Prop()
    costumer_country?: string;
    @Prop()
    costumer_zip?: string;
    @Prop({ type: Object })
    costumer_geoLoc?: any;

    @Prop({ type: [ProductsSchema], default: [] })
    products?: Products[]; 

    @Prop()
    state_of_transaction?: string; // PAID: pagado, PENDING: pendiente, CANCELLED: cancelado, REFUNDED: reembolsado, RETURNED: devuelto, REJECTED: rechazado
    @Prop()
    total?: number;
    @Prop()
    total_tax_p?: number;
    @Prop()
    total_discount?: number;
    @Prop()
    total_discount_tax_p?: number;
    @Prop()
    total_shipping?: number;
    @Prop()
    total_shipping_tax_p?: number;
    @Prop()
    total_shipping_discount_p?: number;
    @Prop()
    total_shipping_discount_tax_p?: number;
}
export const SellSchema = SchemaFactory.createForClass(Sell);

