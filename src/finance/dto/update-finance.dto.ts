import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  CreateFinanceDtoPage1,
  CreateFinanceDtoPage2,
  CreateFinanceDtoPage3,
} from './create-finance.dto';

export class UpdateFinanceDtoPage1 extends PartialType(CreateFinanceDtoPage1) {
  @ApiProperty()
  lock: string;
  @ApiProperty()
  date: string;
  @ApiProperty()
  supplierName: string;
  @ApiProperty()
  totalMoney: string;
  @ApiProperty()
  payWay: string;
  @ApiProperty()
  account: string;
  @ApiProperty()
  operator: string;
  @ApiProperty()
  remark: string;
}

export class UpdateFinanceDtoPage2 extends PartialType(CreateFinanceDtoPage2) {
  @ApiProperty()
  lock: string;
  @ApiProperty()
  date: string;
  @ApiProperty()
  customerName: string;
  @ApiProperty()
  totalMoney: string;
  @ApiProperty()
  payWay: string;
  @ApiProperty()
  account: string;
  @ApiProperty()
  operator: string;
  @ApiProperty()
  remark: string;
}
export class UpdateFinanceDtoPage3 extends PartialType(CreateFinanceDtoPage3) {
  @ApiProperty()
  lock: string;
  @ApiProperty()
  date: string;
  @ApiProperty()
  driverName: string;
  @ApiProperty()
  totalMoney: string;
  @ApiProperty()
  payWay: string;
  @ApiProperty()
  account: string;
  @ApiProperty()
  operator: string;
  @ApiProperty()
  remark: string;
}
