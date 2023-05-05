import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Services } from 'src/utils/constants';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [{
        useClass: AuthService,
        provide: Services.AUTH
    }]
})
export class AuthModule { }
