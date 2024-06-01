import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { dtoItem } from './dto/dtoItem.dto';

@Controller('')
export class AppControllerApi{
  @Get()
  getUps(){
    return "Hello World"
  }
}
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('catalog')
  getHello() {
    return this.appService.getCatalogs();
  }
  @Get('catalog/:id')
  getId(@Param('id') id: string){
    return this.appService.getItemById(id)
  }
  @UsePipes(new ValidationPipe())
  @Post('post')
  async postItem(@Body() dto: dtoItem){
    const res = await this.appService.postCatalogItem(dto)
    return res
  }
  @Put('edit/:id')
  async putEditItem(@Param('id') id: string, @Body() item: any){
    const res = await this.appService.editItemById(id, item)
    return res
  }
  @Delete('delete/:id')
  async delteItem(@Param('id') id:string){
    const res = await this.appService.deleteCatalogItem(id)
    return res
  }
}
