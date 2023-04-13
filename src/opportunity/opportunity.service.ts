import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreateOpportunityDtoPage1,
  CreateOpportunityDtoPage2,
  CreateOpportunityDtoPage3,
  CreateOpportunityDtoPage4,
} from './dto/create-opportunity.dto';
import {
  UpdateOpportunityDtoPage1,
  UpdateOpportunityDtoPage2,
  UpdateOpportunityDtoPage3,
  UpdateOpportunityDtoPage4,
} from './dto/update-opportunity.dto';

@Injectable()
export class OpportunityService {
  constructor(private prisma: PrismaService) {}
  // 新建page1数据
  createPage1(createOpportunityDto: CreateOpportunityDtoPage1) {
    return this.prisma.opportunityPage1.create({ data: createOpportunityDto });
  }
  // 新建page2数据
  createPage2(createOpportunityDto: CreateOpportunityDtoPage2) {
    return this.prisma.opportunityPage2.create({ data: createOpportunityDto });
  }
  // 新建page3数据
  createPage3(createOpportunityDto: CreateOpportunityDtoPage3) {
    return this.prisma.opportunityPage3.create({ data: createOpportunityDto });
  }
  // 新建page4数据
  createPage4(createOpportunityDto: CreateOpportunityDtoPage4) {
    return this.prisma.opportunityPage4.create({ data: createOpportunityDto });
  }

  // 查询page1数据
  findAllPage1() {
    return this.prisma.opportunityPage1.findMany();
  }

  // 查询page2数据
  findAllPage2() {
    return this.prisma.opportunityPage2.findMany();
  }

  // 查询page3数据
  findAllPage3() {
    return this.prisma.opportunityPage3.findMany();
  }

  // 查询page4数据
  findAllPage4() {
    return this.prisma.opportunityPage4.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} opportunity`;
  }

  // 更新page1数据
  updatePage1(id: number, updateOpportunityDto: UpdateOpportunityDtoPage1) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page2数据
  updatePage2(id: number, updateOpportunityDto: UpdateOpportunityDtoPage2) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page3数据
  updatePage3(id: number, updateOpportunityDto: UpdateOpportunityDtoPage3) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page4数据
  updatePage4(id: number, updateOpportunityDto: UpdateOpportunityDtoPage4) {
    return `This action updates a #${id} opportunity`;
  }

  remove(id: number) {
    return `This action removes a #${id} opportunity`;
  }
}
