import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {
    async onModuleinit(){
        await this.$connect()
    }

    async onModuleDestroy(){
        await this.$disconnect()
    }

    /* async enebleShutdownHooks(app: INestApplication){
        this.$on('info' , async ()=>{
            await app.close()
        })
    } */
}
