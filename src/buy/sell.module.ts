import { Module } from '@nestjs/common';
import { SellService } from './sell.service';
import { SellController } from './sell.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Sell, SellSchema } from './schemas/sell.schema';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Sell.name, schema: SellSchema }]),
  ],
  controllers: [SellController],
  providers: [SellService],
})
export class SellModule {}
