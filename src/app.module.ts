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
import { PollExecuteModule } from './poll-execute/poll-execute.module';
import { PollsGroupModule } from './polls-group/polls-group.module';
import { StaffModule } from './staff/staff.module';
import { CompanyModule } from './company/company.module';


@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    MailModule,
    PollExecuteModule,
    PollsGroupModule,
    StaffModule,
    CompanyModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
