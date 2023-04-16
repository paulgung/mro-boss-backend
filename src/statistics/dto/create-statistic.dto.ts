import { ApiProperty } from '@nestjs/swagger';

export class CreateStatisticDtoPage1 {
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

export class CreateStatisticDtoPage2 {
  @ApiProperty()
  supplierName: string;
  @ApiProperty()
  buyMoney: string;
  @ApiProperty()
  payMoney: string;
  @ApiProperty()
  totalMoney: string;
}

export class CreateStatisticDtoPage3 {
  @ApiProperty()
  customerName: string;
  @ApiProperty()
  buyMoney: string;
  @ApiProperty()
  payMoney: string;
  @ApiProperty()
  totalMoney: string;
}

export class CreateStatisticDtoPage4 {
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
