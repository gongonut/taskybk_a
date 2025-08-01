import { Injectable } from '@nestjs/common';
import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
// import puppeteer from "puppeteer";
// https://echobind.com/post/browserless-puppeteer OJO
import puppeteer from 'puppeteer-core';

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

  async startactivity(emailDto: UpdateEmailDto) {

    // const pdf = await this.html2pdf(emailDto.html);
    // attach = { filename: `${emailDto.data['activity_name'] || 'Actividad'}.pdf`, content: pdf }
    // const datestr = new Date(emailDto.data['date']).toLocaleString('es-CO', { 'dateStyle': 'short', 'timeStyle': 'short', 'hour12': true })
    const datestr = emailDto.data['date'];
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
        status: 'Inicia',
        date: datestr
      },
      // attachments: [{ filename: `${emailDto.data['activity_name'] || 'Actividad'}.pdf`, content: pdf }]
    })
    // return { status: 200, message: 'MAIL_SENDED' }
  }

  async endactivity(emailDto: UpdateEmailDto) {

    const pdf = await this.html2pdf(emailDto.html);
    // attach = { filename: `${emailDto.data['activity_name'] || 'Actividad'}.pdf`, content: pdf }
    const datestr = emailDto.data['date'];
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
        status: 'Finalizada',
        date: datestr
      },
      attachments: [{ filename: `${emailDto.data['activity_name'] || 'Actividad'}.pdf`, content: Buffer.from(pdf) }]
    })
    // return { status: 200, message: 'MAIL_SENDED' }
  }

  async html2pdf(html: string, options = {}) {
    try {
      const browser = await this.getBrowser();
      const page = await browser.newPage();
      await page.setContent(html);
      const buffer = await page.pdf({
        // path: 'output-abc.pdf',
        format: 'letter',
        printBackground: true,
        margin: {
          left: '10mm',
          top: '10mm',
          right: '10mm',
          bottom: '10mm',
        },
        ...options,
      });
      await browser.close();
      // process.exit();
      return buffer;

    } catch (e) {
      console.log(e);
      // await browser.close();
    }
  }

  async otherNotificationFromWeb(emailDto: UpdateEmailDto) {
    return await this.otherNotification(emailDto.to, emailDto.html, emailDto.subject);
  }

  async otherNotification(notifMailList: string, htmldata: string, subject: string) {
    const maillist = notifMailList.split(';').join(',');
    return await this.mails.sendMail({
      to: maillist,
      subject: subject,
      html: htmldata,
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

  private async getBrowser() {
    if (process.env.BROWSER_WS_ENDPOINT) {
      // Use Browserless for staging and production
      return await puppeteer.connect({
        browserWSEndpoint: process.env.BROWSER_WS_ENDPOINT,
      });
    } else {
      // Fallback to local Chrome instance if BROWSER_WS_ENDPOINT is not set for local development
      return await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless=new'],
        ignoreDefaultArgs: ['--disable-extensions'],
      });
    }
  };
}
