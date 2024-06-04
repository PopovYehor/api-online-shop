import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogService } from './catalog/catalog.service';
import { CatalogController } from './catalog/catalog.controller';

@Module({
  providers: [DatabaseService, CatalogModule, CatalogService, CatalogController],
  exports: [DatabaseService]
})
export class DatabaseModule {}
