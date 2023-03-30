import * as mongoose from 'mongoose';

export const ProductosSchema = new mongoose.Schema({
  producto: { type: String, require: false },
  precio: { type: Number, require: false },
  img_url: { type: String, require: false },
  stock: { type: Number, require: false },
  categoria: { type: String, require: false },
  cantidad: { type: Number, require: false },
});

export interface Productos {
  readonly id: number;
  readonly producto: string;
  readonly precio: number;
  readonly img_url: string;
  readonly stock: number;
  readonly categoria: string;
  readonly cantidad: number;
}
