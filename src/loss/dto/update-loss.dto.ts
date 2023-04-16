import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateLossDtoPage1 } from './create-loss.dto';

export class UpdateLossDtoPage1 extends PartialType(CreateLossDtoPage1) {
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
