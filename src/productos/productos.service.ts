import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProsuctosDto } from 'src/dto/create-productos.dto';
import { Productos } from 'src/interfaces/productos/productos.interface';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel('productos') private readonly productos: Model<Productos>,
  ) {}

  async create(producto: CreateProsuctosDto) {
    const productoCreado = await this.productos.create(producto);
    return productoCreado;
  }
  async findAll() {
    const todoslosProductos = await this.productos.find();
    return todoslosProductos;
  }
  async findById(id) {
    const unProductos = await this.productos.findById(id);
    return unProductos;
  }
  async deleteById(id) {
    await this.productos.deleteOne({ _id: `${id}` });
    return 'Producto eliminado';
  }
  async deleteAll() {
    const TraerTodo = await this.productos.find();
    for (const elemento of TraerTodo) {
      this.productos.deleteOne({ _id: `${elemento._id}` });

      return 'Eliminamos todo';
    }
  }
  async update(id, obj) {
    await this.productos.updateOne(
      { _id: `${id}` },
      {
        $set: {
          producto: obj.producto,
          precio: obj.precio,
          img_url: obj.img_url,
          stock: obj.stock,
          categoria: obj.categoria,
          cantidad: 1,
        },
      },
    );
    return 'producto editado'
  }
}
