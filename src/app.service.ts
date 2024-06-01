import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { dtoItem } from './dto/dtoItem.dto';
import { DatabaseService } from './database/database.service';
import { interfaceCatalogItem } from './interfaces/catalog-item-interface';

@Injectable()
export class AppService {
  prisma = new PrismaClient()
  constructor (
    private readonly DatabaseService: DatabaseService
  ){}
  
  async getCatalogs() {
    const allCatalog = await this.prisma.catalogs.findMany()
    return allCatalog
  }
  async postCatalogItem(dto: dtoItem){
    return this.DatabaseService.catalogs.create({
      data: dto
    })
  }
  async getItemById(id: string){
    const itemById = await this.prisma.catalogs.findUnique({
      where:{
        id: id
      },
    })
    return itemById
  }
  async editItemById(id: string, data: interfaceCatalogItem){
    const itemById = await this.prisma.catalogs.update({
      where:{
        id: id
      },
      data:{
        price: data.price,
        category: data.category,
        title: data.title,
        description: data.description,
        image: data.image
      }
    })
    return itemById
  }
  async deleteCatalogItem(id:string){
    const deleteItem = await this.prisma.catalogs.delete({
      where:{
        id: id
      }
    })
    return deleteItem
  }
}
