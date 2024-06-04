import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { PrismaClient } from '@prisma/client';
import { catalogDto } from './dto/catalogDto.dto'; 
import { interfaceCatalogItem } from './interfaces/catalogInterface';
@Injectable()
export class CatalogService extends DatabaseService {
    prisma = new PrismaClient()
    async getCatalogs() {
        const allCatalog = await this.prisma.catalogs.findMany()
        return allCatalog
    }
    async postCatalogItem(dto: catalogDto){
        return this.catalogs.create({
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
