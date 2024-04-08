/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Nested Schema
@Schema({ _id: false })
export class Option extends Document { // Talla, color
    @Prop({ required: true })
    subid: string;

    @Prop()
    description: string;

    @Prop()
    stock?: number;

    @Prop()
    link?: string; //nombre del color en exadecimal o avatar o lo que sea
    
}
export const OptionSchema = SchemaFactory.createForClass(Option);

/*
// Nested Schema
@Schema({ _id: false })
export class SubProduct extends Document {
    @Prop({ required: true })
    subid: string;

    @Prop()
    description: string;

    @Prop()
    stock?: string;

}
export const SubProductSchema = SchemaFactory.createForClass(SubProduct);
*/

// Parent Schema
@Schema()
export class Product extends Document {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    description?: string;

    @Prop()
    price? : number;

    @Prop() // porcentaje
    tax_p? : number;

    @Prop({ type: [OptionSchema], default: [] })
    options?: Option[];

    @Prop()
    characterList?: object[]

    /*
    @Prop()
    owner: {type: mongoose.Types.ObjectId, ref: "Category"}
    */
}
export const ProductSchema = SchemaFactory.createForClass(Product);


/*
export type ProductDocument = HydratedDocument<Product>;
@Schema()
export class Product {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    description?: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
*/




/**
export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({ type: [FoodSchema] })
  favFoods: Food[]
}

export const CatSchema = SchemaFactory.createForClass(Cat);
 */