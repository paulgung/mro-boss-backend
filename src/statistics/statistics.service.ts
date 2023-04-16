import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import {
  CreateStatisticDtoPage1,
  CreateStatisticDtoPage2,
  CreateStatisticDtoPage3,
  CreateStatisticDtoPage4,
} from './dto/create-statistic.dto';
import {
  UpdateStatisticDtoPage1,
  UpdateStatisticDtoPage2,
  UpdateStatisticDtoPage3,
  UpdateStatisticDtoPage4,
} from './dto/update-statistic.dto';

@Injectable()
export class StatisticsService {
  constructor(private prisma: PrismaService) {}
  // 新建page1数据
  createPage1(createOpportunityDto: CreateStatisticDtoPage1) {
    return this.prisma.statisticsPage1.create({ data: createOpportunityDto });
  }
  // 新建page2数据
  createPage2(createOpportunityDto: CreateStatisticDtoPage2) {
    return this.prisma.statisticsPage2.create({ data: createOpportunityDto });
  }
  // 新建page3数据
  createPage3(createOpportunityDto: CreateStatisticDtoPage3) {
    return this.prisma.statisticsPage3.create({ data: createOpportunityDto });
  }
  // 新建page4数据
  createPage4(createOpportunityDto: CreateStatisticDtoPage4) {
    return this.prisma.statisticsPage4.create({ data: createOpportunityDto });
  }

  // 查询page1数据
  findAllPage1() {
    return this.prisma.statisticsPage1.findMany();
  }

  // 查询page2数据
  findAllPage2() {
    return this.prisma.statisticsPage2.findMany();
  }

  // 查询page3数据
  findAllPage3() {
    return this.prisma.statisticsPage3.findMany();
  }

  // 查询page4数据
  findAllPage4() {
    return this.prisma.statisticsPage4.findMany();
  }

  // 分页查询page1数据
  async findSkipPage1(pageSize: number, pageNo: number) {
    const total = await this.prisma.statisticsPage1.count();
    const data = await this.prisma.statisticsPage1.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询page2数据
  async findSkipPage2(pageSize: number, pageNo: number) {
    const total = await this.prisma.statisticsPage2.count();
    const data = await this.prisma.statisticsPage2.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询page3数据
  async findSkipPage3(pageSize: number, pageNo: number) {
    const total = await this.prisma.statisticsPage3.count();
    const data = await this.prisma.statisticsPage3.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询page4数据
  async findSkipPage4(pageSize: number, pageNo: number) {
    const total = await this.prisma.statisticsPage4.count();
    const data = await this.prisma.statisticsPage4.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} opportunity`;
  }

  // 更新page1数据
  updatePage1(id: number, updateOpportunityDto: UpdateStatisticDtoPage1) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page2数据
  updatePage2(id: number, updateOpportunityDto: UpdateStatisticDtoPage2) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page3数据
  updatePage3(id: number, updateOpportunityDto: UpdateStatisticDtoPage3) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page4数据
  updatePage4(id: number, updateOpportunityDto: UpdateStatisticDtoPage4) {
    return `This action updates a #${id} opportunity`;
  }

  remove(id: number) {
    return `This action removes a #${id} opportunity`;
  }
}
