import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { catalogDto } from './dto/catalogDto.dto';

@Controller('api')
export class CatalogController {

    constructor(private readonly CatalogService: CatalogService){}
    @Get('catalog')
    getCatalog(){
        return this.CatalogService.getCatalogs()
    }
    @Get('catalog/:id')
    getId(@Param('id') id: string){
      return this.CatalogService.getItemById(id)
    }
    @UsePipes(new ValidationPipe())
    @Post('catalog')
    async postItem(@Body() dto: catalogDto){
        const res = await this.CatalogService.postCatalogItem(dto)
        return res
    }
    @Put('catalog/:id')
    async putEditItem(@Param('id') id: string, @Body() item: any){
        const res = await this.CatalogService.editItemById(id, item)
        return res
    }
    @Delete('catalog/:id')
    async delteItem(@Param('id') id:string){
        const res = await this.CatalogService.deleteCatalogItem(id)
      return res
    }
}
