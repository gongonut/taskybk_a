import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/*
@Schema({ _id: false })
export class Categ2Prod extends Document {
    @Prop()
    cat_id: string; // _id de la categía padre
    @Prop()
    char_id: string; // De la característica origen
    @Prop()
    opt_id: string; //  Id de ChrOption
    @Prop()
    opt_name: string; //  Nombre de ChrOption
    @Prop()
    id?: string;
    @Prop()
    title?: string; // el value de chtOption, título: "Rojo"
    @Prop()
    pictures?: string[]; // URL de las imágenes que representan ésta selección
    @Prop()
    stock?: number;
    @Prop()
    price?: number; // valor del producto
    @Prop()
    tax_p?: number;
    @Prop()
    subfilterlist?: {key: string, value: any}[]; // lista de afectador por el filtro local
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
*/

@Schema({ _id: false })
export class Opt2Prod extends Document {
    @Prop()
    opt_id: string; //  Id de ChrOption
    @Prop()
    opt_name: string; //  Nombre de ChrOption
    @Prop()
    title?: string; // el value de chtOption, título: "Rojo"
}
export const Opt2ProdSchema = SchemaFactory.createForClass(Opt2Prod);

// Parent Schema
@Schema()
export class Product extends Document {
    @Prop()
    id: string;
    @Prop()
    parent_id: string;
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
    stars?: number;
    @Prop()
    chip?: string;
    @Prop()
    opinion?: string;
    @Prop()
    categIds?: {key: string, value: any}[];
    @Prop({ type: [Opt2ProdSchema], default: [] })
    opt2List?: Opt2Prod[];
    @Prop()
    prodXFilterList?: string[]; // Ids de los productos padres Ejemplo:ojyKt:XS, ojyKt:S, ojyKt:M, ojyKt:L, ojyKt:XL, ojyKt:XXL
}
export const ProductSchema = SchemaFactory.createForClass(Product);