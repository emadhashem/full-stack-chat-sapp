import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  const PORT = process.env.PORT || 3002
  try {
    await app.listen(PORT, () => console.log('The App is on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
