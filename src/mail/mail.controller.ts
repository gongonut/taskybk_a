import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateEmailDto } from './dto/create-email.dto';
// import { UpdateEmailDto } from './dto/update-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly mailService: MailService) { }

  @Post('activitynotif')
  async activitynotif(@Body() createEmailDto: CreateEmailDto) {
    createEmailDto.data['status'] === 'start' ? 'Inicia actividad' : 'Finalizar actividad';
    if (createEmailDto.subject_opt === 'start') {

      return await this.mailService.startactivity(createEmailDto);
    }
    return await this.mailService.endactivity(createEmailDto);
  }

  @Post('otherNotification')
  async otherNotification(@Body() createEmailDto: CreateEmailDto) {
    return this.mailService.otherNotificationFromWeb(createEmailDto);
  }

  @Post()
  defEmailHtml(@Body() createEmailDto: CreateEmailDto) {
    return this.mailService.welcome2tasky(createEmailDto);
  }



  /*
  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    return this.mailService.create(createEmailDto);
  }

  @Get()
  findAll() {
    return this.mailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto) {
    return this.mailService.update(+id, updateEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailService.remove(+id);
  }
  */
}
