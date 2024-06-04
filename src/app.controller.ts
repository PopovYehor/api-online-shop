import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppControllerApi{
  @Get()
  getHello(){
    return "Get all catalogs /api/catalog"
  }
}
@Controller('api')
export class AppController {}
