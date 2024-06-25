/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Nested Schema

@Schema({ _id: false })
export class ChrOptionData extends Document {
    @Prop()
    id: string;
    @Prop()
    key: string; // El key de chtOption
    @Prop()
    value: string; // el value de chtOption
    @Prop()
    pictures?: string[]; // URL de las imágenes que representan ésta selección
    @Prop()
    stock?: number;
    @Prop()
    price?: number; // valor del producto
    @Prop()
    tax_p?: number;
}
export const ChrOptionDataSchema = SchemaFactory.createForClass(ChrOptionData);


@Schema({ _id: false })
export class ChrOption extends Document {
    @Prop()
    pos: string;
    @Prop()
    id: string;
    @Prop()
    title: string;
    @Prop()
    add2filter: boolean; // Agregar a las opciones de búsqueda y a la cotización
    @Prop()
    type: string; // NONE, radio, checkbox, select picture, select multi
    @Prop()
    select: boolean; // NONE, radio, checkbox, select picture, select multi
    @Prop({ type: [ChrOptionDataSchema], default: [] })
    selectlist?: ChrOptionData[];
    // @Prop()
    // selected?: string;
    @Prop()
    source?: string;
}
export const ChrOptionSchema = SchemaFactory.createForClass(ChrOption);

@Schema({ _id: false })
export class Characteristics extends Document {
    @Prop()
    pos: string;
    @Prop()
    cat_id: string;
    @Prop()
    id: string;
    @Prop()
    header: string;
    @Prop()
    duplicable: boolean; // Duplicable por quien edita el producto, no por el cliente  
    @Prop({ type: [ChrOptionSchema], default: [] })
    data?: ChrOption[];
}
export const CharacteristicsSchema = SchemaFactory.createForClass(Characteristics);

// Parent Schema
@Schema()
export class Category extends Document {

    @Prop()
    _id: string;
    @Prop()
    picture?: string;
    @Prop()
    name: string;
    @Prop()
    description?: string;
    @Prop({ type: [CharacteristicsSchema], default: [] })
    characterList?: Characteristics[];
    @Prop()
    indexCategory?: string[];
    @Prop()
    visible: boolean;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
