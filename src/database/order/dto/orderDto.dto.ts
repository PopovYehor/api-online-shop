import { IsArray, IsOptional, IsString } from "class-validator";
import { catalogDto } from "src/database/catalog/dto/catalogDto.dto";

export class orderDto{
    @IsArray()
    cart: [catalogDto]
    @IsString()
    deliveryAddres: string
    deliveryType: string
    email: string
    name: string
    paymentType: string
    phone: string
    createAt: string
    @IsOptional()
    @IsString()
    updateAt: string
}