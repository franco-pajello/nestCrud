import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductosModule,
    MongooseModule.forRoot(
      'mongodb+srv://franco-pajello:tJ7LmKYYZwptLS9G@cluster0.8t2nx9j.mongodb.net/ecommerce',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
