import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Services } from '../../utils/constants';
import { IUserService } from 'src/user/user';
import { User } from 'src/entities/User.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.USER)
    private readonly userService: IUserService,
  ) {
    super();
  }
  serializeUser(user: User, done: Function) {
    done(null, user);
  }
  async deserializeUser(user: User, done: Function) {
    const userDb = await this.userService.findUser(user.email);
    return userDb ? done(null, userDb) : done(null, null);
  }
}