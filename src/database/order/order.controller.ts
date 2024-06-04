import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { orderDto } from './dto/orderDto.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly OrderService: OrderService ){}
    @Get()
    getAllOrders(){
        return this.OrderService.getOrders()
    }
    @Get('/:id')
    getId(@Param('id') id: string){
      return this.OrderService.getItemById(id)
    }
    @UsePipes(new ValidationPipe())
    @Post()
    async postItem(@Body() dto: orderDto){
        const res = await this.OrderService.postOrderItem(dto)
        return res
    }
    @Put('/:id')
    async putEditItem(@Param('id') id: string, @Body() item: any){
        const res = await this.OrderService.editItemById(id, item)
        return res
    }
    @Delete('/:id')
    async delteItem(@Param('id') id:string){
        const res = await this.OrderService.deleteOrderItem(id)
      return res
    }
}
