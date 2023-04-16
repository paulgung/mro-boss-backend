import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateLossDtoPage1 } from './dto/create-loss.dto';
import { UpdateLossDtoPage1 } from './dto/update-loss.dto';

@Injectable()
export class LossService {
  constructor(private prisma: PrismaService) {}

  // 新建page1数据
  createPage1(createLossDto: CreateLossDtoPage1) {
    return this.prisma.lossPage1.create({ data: CreateLossDtoPage1 });
  }

  // 分页查询page1数据
  async findSkipPage1(pageSize: number, pageNo: number) {
    const total = await this.prisma.lossPage1.count();
    const data = await this.prisma.lossPage1.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 更新page1数据
  updatePage1(id: number, updateLossDtoPage: UpdateLossDtoPage1) {
    return `This action updates a #${id} opportunity`;
  }
}
