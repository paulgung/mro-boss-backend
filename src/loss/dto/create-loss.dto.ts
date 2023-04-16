import { ApiProperty } from '@nestjs/swagger';

export class CreateLossDtoPage1 {
  @ApiProperty()
  date: string;
  @ApiProperty()
  productId: string;
  @ApiProperty()
  productName: string;
  @ApiProperty()
  standard: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  unit: string;
  @ApiProperty()
  lossNumber: string;
  @ApiProperty()
  lossPrice: string;
  @ApiProperty()
  lossTotal: string;
  @ApiProperty()
  remark: string;
}
