import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IAuthService } from './auth';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';
import { comparePassword } from 'src/utils/helpers';
import { User } from 'src/entities/User.entity';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject(Services.USER)
        private readonly userService: IUserService
    ) { }
    signup() {
        return 'user service'
    }
    async validateUser(email: string, password: string) {
        const user = await this.userService.findUser(email)
        if(!user) throw new NotFoundException('User Not found')
        const validatePass = await comparePassword(password , user.password)
        return user
    }
}
