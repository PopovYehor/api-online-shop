import { IsNumber, IsOptional, IsString } from "class-validator"

export class dtoItem{
    price: number
    v: 0
    @IsString()
    title: string
    description: string
    category: string
    image: string
    @IsOptional()
    rating: {
        rate: number
        count: number
    }
}