import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
//import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
// import { join } from 'path';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
// import { MailerModule } from '@nestjs-modules/mailer';

import { PollsGroupModule } from './polls-group/polls-group.module';
import { StaffModule } from './staff/staff.module';
import { CompanyModule } from './company/company.module';
import { PollresultModule } from './pollresult/pollresult.module';
// import { ChatGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';
import { CostumerModule } from './costumer/costumer.module';
import { ProductModule } from './product/product.module';
import { ChatbotModule } from './chatbot/chatbot.module';
// import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
// import { CrmService } from './crm/crm.service';
import { CategModule } from './categ/categ.module';
import { IaResourceModule } from './ia-resource/ia-resource.module';
import { IoFilesModule } from './io-files/io-files.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SellModule } from './buy/sell.module';
// import { SellModule } from './sell/sell.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    // InMemoryDBModule.forRoot({}),
    ScheduleModule.forRoot(),
    MailModule,
    PollsGroupModule,
    StaffModule,
    CompanyModule,
    PollresultModule,
    ChatModule,
    CostumerModule,
    ProductModule,
    ChatbotModule,
    CategModule,
    IaResourceModule,
    IoFilesModule,
    SellModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
