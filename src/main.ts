import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';

async function bootstrap() {
  const start = Date.now();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);

  const port = configService.port;

  await app.listen(port);

  console.info(`Server started on port: ${port}`);
  // console.info(
  //   `Server is accepting connections from: ${configService
  //     .get<string>('ALLOWED_ORIGINS')
  //     .split(',')}`,
  // );
  console.info(`Server start took: ${(Date.now() - start) / 1000}s`);
}

bootstrap();
