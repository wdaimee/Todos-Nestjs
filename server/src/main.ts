import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(process.cwd(), '../client/build')));
  }

  await app.listen(process.env.PORT || 3001);
}

bootstrap();