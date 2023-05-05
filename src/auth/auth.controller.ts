import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { Services } from 'src/utils/constants';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(Services.AUTH)
        private readonly authService: IAuthService
    ) { }

    @Post('/signup')
    @UsePipes(ValidationPipe)
    singup(@Body() createUserDto : CreateUserDto) {
        return this.authService.signup()
    }
}
