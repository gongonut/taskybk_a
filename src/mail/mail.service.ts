import { Injectable } from '@nestjs/common';
import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private mails: MailerService) { }

  /*
  async quoteEmail(updateQuoteDto: UpdateQuoteDto) {
    await this.mails.sendMail({
      to: updateQuoteDto.client_email,
      from: updateQuoteDto.agent_email,
      subject: 'Respuesta a su solicitud de cotización',
      // html: updateQuoteDto.htmlQuote,
      attachments: [{ filename: `${updateQuoteDto.client_name}_cotiza.html`, content: updateQuoteDto.htmlQuote }]
    })
    return 'ok';
  }
  */

  async welcome2tasky(emailDto: UpdateEmailDto) {
    const maillist = emailDto.to.split(';').join(',');
    // console.log(`${process.env.SMPT_EMAIL_LONG}--${process.env.EMAIL_USER} -- ${process.env.EMAIL_PASS_16}`);
    return await this.mails.sendMail({
      to: maillist,
      // from: process.env.EMAIL_USER,
      subject: '¡Bienvenido a tasky.!!',
      template: 'newtasker',
      context: {
        pagedata: 'https://epoll-cli.firebaseapp.com/'
      }
      // attachments: emailDto.attachments
    })
    // return { status: 200, message: 'MAIL_SENDED' }
  }

  async startendactivity(emailDto: UpdateEmailDto) {
    const maillist = emailDto.to.split(';').join(',');
    // console.log(`${process.env.SMPT_EMAIL_LONG}--${process.env.EMAIL_USER} -- ${process.env.EMAIL_PASS_16}`);
    return await this.mails.sendMail({
      to: maillist,
      // from: process.env.EMAIL_USER,
      subject: 'Estado de la actividad',
      template: 'startendactivity',
      context: {
        staff_name: emailDto.data['staff_name'] || 'Tasker',
        activity_name: emailDto.data['activity_name'] || 'Actividad',
        activity_logo: emailDto.data['activity_logo'] || 'https://firebasestorage.googleapis.com/v0/b/epoll-e2412.appspot.com/o/tasky%2Ftasky.png?alt=media&token=8333b7e3-5554-4ec3-b638-d87899d108d5%22',
        status: emailDto.data['status'],
        data: emailDto.data['data']
      }
      // attachments: emailDto.attachments
    })
    // return { status: 200, message: 'MAIL_SENDED' }
  }

  /*

  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
  */
}
