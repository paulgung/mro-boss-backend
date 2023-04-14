import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  CreateOutboundDtoPage1,
  CreateOutboundDtoPage2,
  CreateOutboundDtoPage3,
  CreateOutboundDtoPage4,
} from './create-outbound.dto';

export class UpdateOutboundDtoPage1 extends PartialType(
  CreateOutboundDtoPage1,
) {
  @ApiProperty()
  outboundId: string;
  @ApiProperty()
  outboundDate: string;
  @ApiProperty()
  supplierId: string;
  @ApiProperty()
  operator: string;
  @ApiProperty()
  remark: string;
}

export class UpdateOutboundDtoPage2 extends PartialType(
  CreateOutboundDtoPage2,
) {
  @ApiProperty()
  outboundId: string;
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
  outboundNumber: string;
  @ApiProperty()
  outboundPrice: string;
  @ApiProperty()
  outboundTotal: string;
  @ApiProperty()
  remark: string;
}

export class UpdateOutboundDtoPage3 extends PartialType(
  CreateOutboundDtoPage3,
) {
  @ApiProperty()
  outboundId: string;
  @ApiProperty()
  outboundDate: string;
  @ApiProperty()
  supplierId: string;
  @ApiProperty()
  operator: string;
  @ApiProperty()
  remark: string;
}

export class UpdateOutboundDtoPage4 extends PartialType(
  CreateOutboundDtoPage4,
) {
  @ApiProperty()
  outboundId: string;
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
  outboundNumber: string;
  @ApiProperty()
  outboundPrice: string;
  @ApiProperty()
  outboundTotal: string;
  @ApiProperty()
  remark: string;
}
