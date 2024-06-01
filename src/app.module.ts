import { Module } from '@nestjs/common';
import { AppController, AppControllerApi } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController, AppControllerApi],
  providers: [AppService],
})
export class AppModule {}
