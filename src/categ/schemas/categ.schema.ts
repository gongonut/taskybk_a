/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Nested Schema
@Schema({ _id: false })
export class SubCategory extends Document {
    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    urlpicture?: string;
}
export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);

// Parent Schema
@Schema()
export class Category extends Document {

    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    description?: string;

    @Prop()
    urlpicture?: string;

    @Prop()
    characterList: object[];

    @Prop({ type: [SubCategorySchema], default: [] })
    subCategory?: SubCategory[];
}
export const CategorySchema = SchemaFactory.createForClass(Category);
