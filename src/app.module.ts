import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { PassportModule } from '@nestjs/passport';
import { Session } from './entities/Session.entitt';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }), AuthModule, UserModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    port: +process.env.DBPORT,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    entities: [User, Session],
    synchronize: true
  }),
  PassportModule.register({session : true})
  ],

})
export class AppModule { }
