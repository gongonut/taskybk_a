import { Module } from '@nestjs/common';
import { IaResourceService } from './ia-resource.service';
import { IaResourceController } from './ia-resource.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { IAresource, IAresourceSchema } from './schemas/iares.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: IAresource.name, schema: IAresourceSchema }]),
  ],
  controllers: [IaResourceController],
  providers: [IaResourceService],
})
export class IaResourceModule {}
