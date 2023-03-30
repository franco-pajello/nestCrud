import { ApiProperty } from '@nestjs/swagger';

export class CreateProsuctosDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly producto: string;
  @ApiProperty()
  readonly precio: number;
  @ApiProperty()
  readonly img_url: string;
  @ApiProperty()
  readonly stock: number;
  @ApiProperty()
  readonly categoria: string;
  @ApiProperty()
  readonly cantidad: number;
}

/* {
  "producto": "banana",
  "precio": 55,
  "img_url": "foto",
  "stock": 55,
  "categoria": "fruta",
  "cantidad": 55
} */