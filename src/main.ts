import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura registro entradas por consola (logs)
  const logger = new Logger('App');

  // Prefijo global para acceso API
  app.setGlobalPrefix('api');

  // Configuración pipes
  app.useGlobalPipes(
    new ValidationPipe({
      // Solo las propiedades que están explícitamente decoradas con validadores serán consideradas. 
      whitelist: true,
      // Si no es propiedad válida (whitelist) lanza excepción BadRequestException
      forbidNonWhitelisted: true,
    })
  );

  // Prepara documentación endpoints api con Swagger
  const config = new DocumentBuilder()
  .setTitle('DUACODERS REST API')
  .setDescription('Api en NodeJS para el proyecto de DUACODERS')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  // Configuración puerto 
  await app.listen(process.env.PORT);
  logger.log(`App is running on PORT ${process.env.PORT}`)
}
bootstrap();
