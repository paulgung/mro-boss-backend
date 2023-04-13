import { Injectable } from '@nestjs/common';
import {
  CreateOpportunityDtoPage1,
  CreateOpportunityDtoPage2,
} from '../opportunity/dto/create-opportunity.dto';
import {
  UpdateOpportunityDtoPage1,
  UpdateOpportunityDtoPage2,
} from '../opportunity/dto/update-opportunity.dto';
import { PrismaService } from '../prisma.service';
import {
  CreateInboundDtoPage1,
  CreateInboundDtoPage2,
} from './dto/create-inbound.dto';

@Injectable()
export class InboundService {
  constructor(private prisma: PrismaService) {}

  // 新建page1数据
  createPage1(createOpportunityDto: CreateOpportunityDtoPage1) {
    return this.prisma.inboundPage1.create({ data: CreateInboundDtoPage1 });
  }
  // 新建page2数据
  createPage2(createOpportunityDto: CreateOpportunityDtoPage2) {
    return this.prisma.inboundPage2.create({ data: CreateInboundDtoPage2 });
  }

  // 分页查询page1数据
  async findSkipPage1(pageSize: number, pageNo: number) {
    const total = await this.prisma.inboundPage1.count();
    const data = await this.prisma.inboundPage1.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }
  // 分页查询page2数据
  async findSkipPage2(pageSize: number, pageNo: number) {
    const total = await this.prisma.inboundPage2.count();
    const data = await this.prisma.inboundPage2.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 更新page1数据
  updatePage1(id: number, updateOpportunityDto: UpdateOpportunityDtoPage1) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page2数据
  updatePage2(id: number, updateOpportunityDto: UpdateOpportunityDtoPage2) {
    return `This action updates a #${id} opportunity`;
  }
}
