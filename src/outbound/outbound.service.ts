import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreateOutboundDtoPage1,
  CreateOutboundDtoPage2,
  CreateOutboundDtoPage3,
  CreateOutboundDtoPage4,
} from './dto/create-outbound.dto';
import {
  UpdateOutboundDtoPage1,
  UpdateOutboundDtoPage2,
  UpdateOutboundDtoPage3,
  UpdateOutboundDtoPage4,
} from './dto/update-outbound.dto';

@Injectable()
export class OutboundService {
  constructor(private prisma: PrismaService) {}

  // 新建page1数据
  createPage1(createOpportunityDto: CreateOutboundDtoPage1) {
    return this.prisma.outboundPage1.create({ data: CreateOutboundDtoPage1 });
  }
  // 新建page2数据
  createPage2(createOpportunityDto: CreateOutboundDtoPage2) {
    return this.prisma.outboundPage2.create({ data: CreateOutboundDtoPage2 });
  }
  // 新建page3数据
  createPage3(createOpportunityDto: CreateOutboundDtoPage3) {
    return this.prisma.outboundPage3.create({ data: CreateOutboundDtoPage3 });
  }
  // 新建page4数据
  createPage4(createOpportunityDto: CreateOutboundDtoPage4) {
    return this.prisma.outboundPage4.create({ data: CreateOutboundDtoPage4 });
  }

  // 分页查询page1数据
  async findSkipPage1(pageSize: number, pageNo: number) {
    const total = await this.prisma.outboundPage1.count();
    const data = await this.prisma.outboundPage1.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }
  // 分页查询page2数据
  async findSkipPage2(pageSize: number, pageNo: number) {
    const total = await this.prisma.outboundPage2.count();
    const data = await this.prisma.outboundPage2.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }
  // 分页查询page3数据
  async findSkipPage3(pageSize: number, pageNo: number) {
    const total = await this.prisma.outboundPage3.count();
    const data = await this.prisma.outboundPage3.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }
  // 分页查询page4数据
  async findSkipPage4(pageSize: number, pageNo: number) {
    const total = await this.prisma.outboundPage4.count();
    const data = await this.prisma.outboundPage4.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 更新page1数据
  updatePage1(id: number, updateOpportunityDto: UpdateOutboundDtoPage1) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page2数据
  updatePage2(id: number, updateOpportunityDto: UpdateOutboundDtoPage2) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page3数据
  updatePage3(id: number, updateOpportunityDto: UpdateOutboundDtoPage3) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page4数据
  updatePage4(id: number, updateOpportunityDto: UpdateOutboundDtoPage4) {
    return `This action updates a #${id} opportunity`;
  }
}
