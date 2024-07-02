import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from './schemas/staff.schema';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ChatModule } from 'src/chat/chat.module';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Staff.name, schema: StaffSchema }]),
    JwtModule.register({global: true, secret: process.env.JWT_SEED, signOptions: { expiresIn: '2h' }, }),
    ChatModule,
    MailModule
  ],
  controllers: [StaffController],
  providers: [StaffService, JwtStrategy],
})
export class StaffModule {}
