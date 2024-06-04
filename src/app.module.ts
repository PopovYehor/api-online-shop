import { Module } from '@nestjs/common';
import { AppController, AppControllerApi } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CatalogModule } from './database/catalog/catalog.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), CatalogModule],
  controllers: [AppController, AppControllerApi],
  providers: [AppService],
})
export class AppModule {}
