import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuacodersModule } from './duacoders/duacoders.module';

@Module({
  imports: [
    // Configura las variables de entorno
    ConfigModule.forRoot({
      // Permite inyectar el servicio a nivel global de la app
      isGlobal: true,
      // Especifica el archivo para las variables
      envFilePath: '.env'
    }),
    // Configura BBDD
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Carga las entidades que vamos definiendo
      synchronize: (process.env.STAGE === 'dev') ? true : false, // Sincronza las tablas según detecta cambios en las entidades
    }),
    DuacodersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}