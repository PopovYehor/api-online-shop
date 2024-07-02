import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService) {}

    async validateUser(email: string, password: string){
        const user = await this.userService.findOne(email);
        const passwordIsMatch= await argon2.verify(user.password, password)
        if (user && passwordIsMatch) {
            return user
        }
        throw new UnauthorizedException('Email or password is incorrect')
    }

    async login(user: IUser) {
        const {id, email} = user
        const payload = {id: id, sub: email}
        return {
          id, 
          email,
          access_token: this.jwtService.sign(payload)
        };
    }
}
