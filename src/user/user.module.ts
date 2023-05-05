import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Services } from 'src/utils/constants';

@Module({
  providers: [{
    useClass: UserService,
    provide: Services.USER
  }],
  exports: [
    {
      useClass: UserService,
      provide: Services.USER
    }
  ]
})
export class UserModule { }
