/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Parent Schema
@Schema()
export class ProductList extends Document {
    @Prop()
    prodFilterList?: string[]; // Ids de los productos padres Ejemplo:ojyKt:XS, ojyKt:S, ojyKt:M, ojyKt:L, ojyKt:XL, ojyKt:XXL
    @Prop()
    prodParentList?: string[]; // Ids de los productos padres
    @Prop()
    title?: string; // el value de chtOption
    @Prop()
    data?: string; // URL de las imágenes que representan ésta selección
}
export const ProductListSchema = SchemaFactory.createForClass(ProductList);