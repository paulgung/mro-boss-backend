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
  // 新建数据
  async createPage1(createOpportunityDto: CreateOpportunityDtoPage1) {
    const { companyName, phone, name, address, remark } = createOpportunityDto;

    // 使用 Prisma Client 创建新用户
    const opportunityPage1 = await this.prisma.opportunityPage1.create({
      data: {
        companyName,
        phone,
        name,
        address,
        remark,
      },
    });
    return { message: '单位信息创建成功！', opportunityPage1 };
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

  // 分页查询数据
  async findSkipPage1(
    pageSize: number,
    pageNo: number,
    id: number,
    companyName: string,
  ) {
    const total = await this.prisma.opportunityPage1.count();
    const data = await this.prisma.opportunityPage1.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
      where: {
        ...(id && { id: Number(id) }),
        ...(companyName && { companyName }),
      },
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询page2数据
  async findSkipPage2(pageSize: number, pageNo: number) {
    const total = await this.prisma.opportunityPage2.count();
    const data = await this.prisma.opportunityPage2.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询page3数据
  async findSkipPage3(pageSize: number, pageNo: number) {
    const total = await this.prisma.opportunityPage3.count();
    const data = await this.prisma.opportunityPage3.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询page4数据
  async findSkipPage4(pageSize: number, pageNo: number) {
    const total = await this.prisma.opportunityPage4.count();
    const data = await this.prisma.opportunityPage4.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} opportunity`;
  }

  // 更新数据
  async updatePage1(
    id: number,
    updateOpportunityDto: UpdateOpportunityDtoPage1,
  ) {
    const { companyName, phone, name, address, remark } = updateOpportunityDto;

    // 使用 Prisma Client 更新用户
    const opportunityPage1 = await this.prisma.opportunityPage1.update({
      data: {
        companyName,
        phone,
        name,
        address,
        remark,
      },
      where: {
        ...(id && { id: Number(id) }),
      },
    });
    return { message: '单位信息更新成功！', opportunityPage1 };
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

  // 删除数据
  removePage1(id: number) {
    this.prisma.opportunityPage1.delete({
      where: {
        ...(id && { id: Number(id) }),
      },
    });
  }
  removePage2(id: number) {
    this.prisma.opportunityPage1.delete({
      where: {
        ...(id && { id: Number(id) }),
      },
    });
  }
  removePage3(id: number) {
    this.prisma.opportunityPage1.delete({
      where: {
        ...(id && { id: Number(id) }),
      },
    });
  }
  removePage4(id: number) {
    this.prisma.opportunityPage1.delete({
      where: {
        ...(id && { id: Number(id) }),
      },
    });
  }
}
