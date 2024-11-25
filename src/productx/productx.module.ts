import { Module } from '@nestjs/common';
import { ProductxService } from './productx.service';
import { ProductxController } from './productx.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Productx, ProductxSchema } from './schemas/productx.schema';
import { ProductList, ProductListSchema } from './schemas/prodlist.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Productx.name, schema: ProductxSchema }]),
    MongooseModule.forFeature([{ name: ProductList.name, schema: ProductListSchema }]),
  ],
  controllers: [ProductxController],
  providers: [ProductxService],
})
export class ProductxModule {}
