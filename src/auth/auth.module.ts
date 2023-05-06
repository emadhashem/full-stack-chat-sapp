import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Services } from 'src/utils/constants';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './utils/localStrategy';
import { SessionSerializer } from './utils/SessionSerialize';

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [
        LocalStrategy,
        SessionSerializer,
        {
            useClass: AuthService,
            provide: Services.AUTH
        }]
})
export class AuthModule { }
