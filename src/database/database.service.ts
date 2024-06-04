import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {
    async onModuleinit(){
        await this.$connect()
    }
    async onModuleDestroy(){
        await this.$disconnect()
    }
}
