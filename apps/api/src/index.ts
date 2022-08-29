import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {ImagineModule} from './imagine.module';

async function bootstrap() {
  const app = await NestFactory.create(ImagineModule);
  await app.listen(process.env.PORT!);
}

bootstrap();
