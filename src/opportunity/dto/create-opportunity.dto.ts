import { ApiProperty } from '@nestjs/swagger';
export class CreateOpportunityDtoPage1 {
  @ApiProperty({ description: 'companyName' })
  companyName: string;
  @ApiProperty({ description: 'phone' })
  phone: string;
  @ApiProperty({ description: 'name' })
  name: string;
  @ApiProperty({ description: 'address' })
  address: string;
  @ApiProperty({ description: 'remark' })
  remark: string;
}

export class CreateOpportunityDtoPage2 {
  productId: string;
  productName: string;
  standard: string;
  type: string;
  unit: string;
  remark: string;
}

export class CreateOpportunityDtoPage3 {
  customerId: string;
  customerName: string;
  area: string;
  phone: string;
  remark: string;
}

export class CreateOpportunityDtoPage4 {
  supplierId: string;
  supplierName: string;
  phone: string;
  remark: string;
}
