import { Injectable } from '@nestjs/common';
import { userDto } from './dto/userDto.dto';
import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2'

@Injectable()
export class UserService {
    prisma = new PrismaClient()
    async create(dto: userDto){
        const user = await this.prisma.users.create({
            data: {
                email: dto.email,
                password: await argon2.hash(dto.password)
            }
        })
        return {user}
    }
    async getAllUsers(){
        return await this.prisma.users.findMany()
    }
}
