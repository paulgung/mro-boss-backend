import { ApiProperty } from '@nestjs/swagger';

export class CreateFinanceDtoPage1 {
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

export class CreateFinanceDtoPage2 {
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

export class CreateFinanceDtoPage3 {
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
