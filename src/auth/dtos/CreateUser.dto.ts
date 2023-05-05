import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"


export class CreateUserDto {
    @IsString()
    @MinLength(4)
    first_name: string

    @IsNotEmpty()
    @MinLength(4)
    last_name: string
    
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(4)
    password
}