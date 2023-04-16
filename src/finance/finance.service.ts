import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreateFinanceDtoPage1,
  CreateFinanceDtoPage2,
  CreateFinanceDtoPage3,
} from './dto/create-finance.dto';
import {
  UpdateFinanceDtoPage1,
  UpdateFinanceDtoPage2,
  UpdateFinanceDtoPage3,
} from './dto/update-finance.dto';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  // 新建page1数据
  createPage1(createFinanceDto: CreateFinanceDtoPage1) {
    return this.prisma.financePage1.create({ data: CreateFinanceDtoPage1 });
  }
  // 新建page2数据
  createPage2(createFinanceDto: CreateFinanceDtoPage2) {
    return this.prisma.financePage2.create({ data: CreateFinanceDtoPage2 });
  }
  // 新建page3数据
  createPage3(createFinanceDto: CreateFinanceDtoPage3) {
    return this.prisma.financePage3.create({ data: CreateFinanceDtoPage3 });
  }

  // 分页查询page1数据
  async findSkipPage1(pageSize: number, pageNo: number) {
    const total = await this.prisma.financePage1.count();
    const data = await this.prisma.financePage1.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }
  // 分页查询page2数据
  async findSkipPage2(pageSize: number, pageNo: number) {
    const total = await this.prisma.financePage2.count();
    const data = await this.prisma.financePage2.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }
  // 分页查询page3数据
  async findSkipPage3(pageSize: number, pageNo: number) {
    const total = await this.prisma.financePage3.count();
    const data = await this.prisma.financePage3.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 更新page1数据
  updatePage1(id: number, updateFinanceDto: UpdateFinanceDtoPage1) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page2数据
  updatePage2(id: number, updateFinanceDto: UpdateFinanceDtoPage2) {
    return `This action updates a #${id} opportunity`;
  }
  // 更新page3数据
  updatePage3(id: number, updateFinanceDto: UpdateFinanceDtoPage3) {
    return `This action updates a #${id} opportunity`;
  }
}
