import { ApiProperty } from '@nestjs/swagger';
export class CreateInboundDtoPage1 {
  @ApiProperty()
  inboundId: string;
  @ApiProperty()
  inboundDate: string;
  @ApiProperty()
  supplierId: string;
  @ApiProperty()
  operator: string;
  @ApiProperty()
  remark: string;
}

export class CreateInboundDtoPage2 {
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
  inboundPrice: string;
  @ApiProperty()
  inboundTotal: string;
  @ApiProperty()
  remark: string;
}
