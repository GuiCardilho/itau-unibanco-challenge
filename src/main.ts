import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { EmptyBadRequestFilter } from './shared/filters/empty-bad-request.filter';
import { LoggingInterceptor } from './shared/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: () =>
        new HttpException(
          'Unprocessable Entity',
          HttpStatus.UNPROCESSABLE_ENTITY,
        ),
    }),
  );
  app.useGlobalInterceptors(new LoggingInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Itau Unibanco API')
    .setDescription('API para o desafio técnico da Itau Unibanco')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  app.useGlobalFilters(new EmptyBadRequestFilter());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
