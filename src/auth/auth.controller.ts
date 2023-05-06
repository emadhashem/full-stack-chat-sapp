import { Body, Controller, Inject, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';
import { instanceToPlain } from 'class-transformer';
import { LocalAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(Services.AUTH)
        private readonly authService: IAuthService,
        @Inject(Services.USER)
        private readonly userService: IUserService
    ) { }

    @Post('/signup')
    @UsePipes(ValidationPipe)
    async singup(@Body() createUserDto: CreateUserDto) {
        return instanceToPlain(await this.userService.createUser(createUserDto))
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Body('email') email : string , @Body('password') password : string) {
        return ';)'
    }
}
