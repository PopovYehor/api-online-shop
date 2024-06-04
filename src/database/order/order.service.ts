import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { PrismaClient } from '@prisma/client';
import { orderDto } from './dto/orderDto.dto';
import { Order } from './interface/order.interface';

@Injectable()
export class OrderService extends DatabaseService{
    prisma = new PrismaClient()
    async getOrders(){
        const allOrders = await this.prisma.orders.findMany()
        return allOrders
    }
    async getItemById(id: string){
        const itemById = await this.prisma.orders.findUnique({
          where:{
            id: id
          },
        })
        return itemById
    }
    async postOrderItem(dto: orderDto){
        return this.orders.create({
          data: dto
        })
    }
    async editItemById(id: string, data: Order){
        const itemById = await this.prisma.orders.update({
          where:{
            id: id
          },
          data:{
            deliveryAddres: data.deliveryAddres,
            deliveryType: data.deliveryType,
            email: data.email,
            name: data.name,
            paymentType: data.paymentType,
            phone: data.phone
          }
        })
        return itemById
    }
    async deleteOrderItem(id:string){
        const deleteItem = await this.prisma.orders.delete({
          where:{
            id: id
          }
        })
        return deleteItem
    }
}
