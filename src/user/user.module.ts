import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
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
