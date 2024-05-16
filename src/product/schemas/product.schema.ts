/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Characteristics, CharacteristicsSchema } from 'src/categ/schemas/categ.schema';

@Schema({ _id: false })
export class ChrOptionData2Prod extends Document {
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
export const ChrOptionData2ProdSchema = SchemaFactory.createForClass(ChrOptionData2Prod);

@Schema({ _id: false })
export class ChrOption2Prod extends Document {
    @Prop()
    id: string;
    @Prop({ type: [ChrOptionData2ProdSchema], default: [] })
    selectlist?: ChrOptionData2Prod[];
 
}
export const ChrOption2ProdSchema = SchemaFactory.createForClass(ChrOption2Prod);

@Schema({ _id: false })
export class Characteristics2Prod extends Document {
    @Prop()
    id: string;
    @Prop()
    cat_id: string; // _id de la categía padre
    @Prop()
    header: string;
    @Prop({ type: [ChrOption2ProdSchema], default: [] })
    data?: ChrOption2Prod[];
}
export const Characteristics2ProdSchema = SchemaFactory.createForClass(Characteristics2Prod);

// Parent Schema
@Schema()
export class Product extends Document {
    @Prop()
    id: string;
    @Prop()
    description?: string;
    @Prop()
    description_long?: string;
    @Prop()
    price? : number;
    @Prop() // porcentaje
    tax_p? : number;
    @Prop()
    categIds?: {key: string, value: any}[];
    @Prop({ type: [Characteristics2ProdSchema], default: [] })
    categList?: Characteristics2Prod[];

}
export const ProductSchema = SchemaFactory.createForClass(Product);