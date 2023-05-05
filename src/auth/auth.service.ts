import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject(Services.USER)
        private readonly userService: IUserService
    ) { }
    signup() {
        return 'user service'
    }
}
