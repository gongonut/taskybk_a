/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Characteristics, CharacteristicsSchema } from 'src/categ/schemas/categ.schema';

/*
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
*/

@Schema({ _id: false })
export class Categ2Prod extends Document {
    @Prop()
    cat_id: string; // _id de la categía padre
    @Prop()
    char_id: string; // De la característica origen
    @Prop()
    opt_id: string; //  Id de ChrOption
    @Prop()
    key?: string; // El key de chtOption
    @Prop()
    value?: string; // el value de chtOption
    @Prop()
    pictures?: string[]; // URL de las imágenes que representan ésta selección
    @Prop()
    stock?: number;
    @Prop()
    price?: number; // valor del producto
    @Prop()
    tax_p?: number
}
export const Categ2ProdSchema = SchemaFactory.createForClass(Categ2Prod);

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
    @Prop({ type: [Categ2ProdSchema], default: [] })
    categList?: Categ2Prod[];

}
export const ProductSchema = SchemaFactory.createForClass(Product);