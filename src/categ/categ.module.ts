import { Module } from '@nestjs/common';
import { CategService } from './categ.service';
import { CategController } from './categ.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/categ.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  ],
  controllers: [CategController],
  providers: [CategService],
})
export class CategModule {}
