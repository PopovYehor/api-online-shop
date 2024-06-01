import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { dtoItem } from './dto/dtoItem.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('catalog')
  getHello() {
    return this.appService.getCatalogs();
  }
  @UsePipes(new ValidationPipe())
  @Post('post')
  async postItem(@Body() dto: dtoItem){
    const res = await this.appService.postCatalogItem(dto)
    return res
  }
}
