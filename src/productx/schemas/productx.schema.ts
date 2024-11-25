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
export class Opt2Prodx extends Document {
    @Prop()
    opt_id: string; //  Id de ChrOption
    @Prop()
    opt_name: string; //  Nombre de ChrOption
    @Prop()
    title?: string; // el value de chtOption, título: "Rojo"
}
export const Opt2ProdSchema = SchemaFactory.createForClass(Opt2Prodx);

// Parent Schema
@Schema()
export class Productx extends Document {
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
    stock?: number;
    @Prop()
    categIds?: {key: string, value: any}[];
    @Prop({ type: [Opt2ProdSchema], default: [] })
    optList?: Opt2Prodx[];
    @Prop()
    prodXFilterList?: string[]; // Ids de los productos padres Ejemplo:ojyKt:XS, ojyKt:S, ojyKt:M, ojyKt:L, ojyKt:XL, ojyKt:XXL
}
export const ProductxSchema = SchemaFactory.createForClass(Productx);