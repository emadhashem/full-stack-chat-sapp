import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata'
import * as session from 'express-session'
import * as passport from 'passport'
import { getRepository } from 'typeorm';
import { Session } from './entities/Session.entitt';
import { TypeormStore } from 'connect-typeorm/out';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3002
  const COOKIE_SECRET = process.env.COOKIE_SECRET
  const sessiobRepo = getRepository(Session)
  app.setGlobalPrefix('api')
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true })
  app.use(session({
    secret: COOKIE_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 3600000 * 24 // day
    },
    store: new TypeormStore().connect(sessiobRepo)
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  try {
    await app.listen(PORT, () => console.log('The App is on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
