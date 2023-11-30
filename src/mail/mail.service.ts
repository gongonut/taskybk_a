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

  async defaultEmailHtml(emailDto: UpdateEmailDto) {
    
    // console.log(`${process.env.SMPT_EMAIL_LONG}--${process.env.EMAIL_USER} -- ${process.env.EMAIL_PASS_16}`);
    return await this.mails.sendMail({
      to: emailDto.to,
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

  async defaultEmail(emailDto: UpdateEmailDto) {
    const maillist = emailDto.to.split(';');
    return;
    return await this.mails.sendMail({
      to: maillist,
      // from: emailDto.from,
      subject: emailDto.subject || '',
      // html: emailDto.html || '',
      // attachments: emailDto.attachments
    })
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
