import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { CreateUserBody } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements IUserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) { }

    async createUser(createUserbody: CreateUserBody) {
        try {
            const newUser = this.userRepo.create({ ...createUserbody })
            return await this.userRepo.save(newUser)
        } catch (error) {
            throw new HttpException('User may already exists', HttpStatus.CONFLICT)
        }
    }
    

    async findUser(email: string): Promise<User> {

        return await this.userRepo.findOne({ email })
    }


}
