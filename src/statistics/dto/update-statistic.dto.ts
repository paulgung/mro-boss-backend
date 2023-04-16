import { PartialType } from '@nestjs/mapped-types';
import {
  CreateStatisticDtoPage1,
  CreateStatisticDtoPage2,
  CreateStatisticDtoPage3,
  CreateStatisticDtoPage4,
} from './create-statistic.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatisticDtoPage1 extends PartialType(
  CreateStatisticDtoPage1,
) {
  @ApiProperty()
  inboundId: string;
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
  inboundNumber: string;
  @ApiProperty()
  outboundNumber: string;
  @ApiProperty()
  lossNumber: string;
  @ApiProperty()
  currentNumber: string;
}

export class UpdateStatisticDtoPage2 extends PartialType(
  CreateStatisticDtoPage2,
) {
  @ApiProperty()
  supplierName: string;
  @ApiProperty()
  buyMoney: string;
  @ApiProperty()
  payMoney: string;
  @ApiProperty()
  totalMoney: string;
}

export class UpdateStatisticDtoPage3 extends PartialType(
  CreateStatisticDtoPage3,
) {
  @ApiProperty()
  customerName: string;
  @ApiProperty()
  buyMoney: string;
  @ApiProperty()
  payMoney: string;
  @ApiProperty()
  totalMoney: string;
}

export class UpdateStatisticDtoPage4 extends PartialType(
  CreateStatisticDtoPage4,
) {
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
  saleNumber: string;
  @ApiProperty()
  salePrice: string;
  @ApiProperty()
  costPrice: string;
  @ApiProperty()
  saleTotal: string;
}
