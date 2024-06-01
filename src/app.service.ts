import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { dtoItem } from './dto/dtoItem.dto';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor (
    private readonly DatabaseService: DatabaseService
  ){}
  async getCatalogs() {
    const prisma = new PrismaClient()
    const allCatalog = await prisma.catalogs.findMany()
    return allCatalog
  }
  async postCatalogItem(dto: dtoItem){
    return this.DatabaseService.catalogs.create({
      data: dto
    })
  }
}
