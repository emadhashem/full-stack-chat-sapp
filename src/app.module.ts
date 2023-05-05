import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User.entity';


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
    entities: [User],
    synchronize: true
  })
  ],

})
export class AppModule { }
