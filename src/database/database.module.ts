import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogService } from './catalog/catalog.service';
import { CatalogController } from './catalog/catalog.controller';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';

@Module({
  providers: [DatabaseService, CatalogModule, CatalogService, CatalogController, OrderService],
  exports: [DatabaseService],
  controllers: [OrderController],
  imports: [OrderModule]
})
export class DatabaseModule {}
