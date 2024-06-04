import { IsOptional, IsString } from "class-validator"

export class catalogDto{
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
    count: number
    summPrice: number
    id: string
}