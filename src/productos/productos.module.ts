import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
/* import { MongooseModule } from '@nestjs/mongoose/dist'; */
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosSchema } from 'src/interfaces/Productos/Productos.interface';
import { ProductosService } from './productos.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'productos', schema: ProductosSchema }]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
