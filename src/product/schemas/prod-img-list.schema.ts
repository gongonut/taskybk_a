import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



// Parent Schema
@Schema()
export class ProdImgList extends Document {
    @Prop()
    prod_id: string;
    @Prop()
    prodparentList?: string[]; // Ids de los productos padres Ejemplo:ojyKt:XS, ojyKt:S, ojyKt:M, ojyKt:L, ojyKt:XL, ojyKt:XXL
    @Prop()
    data?: string;
}
export const ProdImgListSchema = SchemaFactory.createForClass(ProdImgList);