import { Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { CreateUserBody } from 'src/utils/types';

@Injectable()
export class UserService implements IUserService {
    createUser(createUserbody: CreateUserBody) {
    }
   

}
