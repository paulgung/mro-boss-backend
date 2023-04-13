import { ApiProperty } from '@nestjs/swagger';
export class CreateOpportunityDtoPage1 {
  @ApiProperty()
  companyName: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  remark: string;
}

export class CreateOpportunityDtoPage2 {
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
  remark: string;
}

export class CreateOpportunityDtoPage3 {
  @ApiProperty()
  customerId: string;
  @ApiProperty()
  customerName: string;
  @ApiProperty()
  area: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  remark: string;
}

export class CreateOpportunityDtoPage4 {
  @ApiProperty()
  supplierId: string;
  @ApiProperty()
  supplierName: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  remark: string;
}
