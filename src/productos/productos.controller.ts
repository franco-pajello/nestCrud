import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateProsuctosDto } from 'src/dto/create-productos.dto';
import { Productos } from 'src/interfaces/Productos/Productos.interface';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() Productos: CreateProsuctosDto) {
    return this.productosService.create(Productos);
  }

  @Get()
  async findAll() {
    return this.productosService.findAll();
  }
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productosService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() Productos: CreateProsuctosDto) {
    return this.productosService.update(id, Productos);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.productosService.deleteById(id);
  }
  @Delete()
  deleteAll() {
    return this.productosService.deleteAll();
  }
}
