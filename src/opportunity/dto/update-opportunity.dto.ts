import { PartialType } from '@nestjs/mapped-types';
import {
  CreateOpportunityDtoPage1,
  CreateOpportunityDtoPage2,
  CreateOpportunityDtoPage3,
  CreateOpportunityDtoPage4,
} from './create-opportunity.dto';

export class UpdateOpportunityDtoPage1 extends PartialType(
  CreateOpportunityDtoPage1,
) {
  companyName: string;
  phone: string;
  name?: string;
  address?: string;
  remark?: string;
}

export class UpdateOpportunityDtoPage2 extends PartialType(
  CreateOpportunityDtoPage2,
) {
  productId: string;
  productName: string;
  standard: string;
  type: string;
  unit: string;
  remark: string;
}

export class UpdateOpportunityDtoPage3 extends PartialType(
  CreateOpportunityDtoPage3,
) {
  customerId: string;
  customerName: string;
  area: string;
  phone: string;
  remark: string;
}

export class UpdateOpportunityDtoPage4 extends PartialType(
  CreateOpportunityDtoPage4,
) {
  supplierId: string;
  supplierName: string;
  phone: string;
  remark: string;
}
