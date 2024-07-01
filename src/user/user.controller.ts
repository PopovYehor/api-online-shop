import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { userDto } from './dto/userDto.dto';

@Controller('user')
export class UserController {
    constructor(private readonly UserService : UserService){}
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() dto: userDto){
        return this.UserService.create(dto)
    }
    @Get()
    getUsers(){
        return this.UserService.getAllUsers()
    }
}
