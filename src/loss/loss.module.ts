import { Module } from '@nestjs/common';
import { LossService } from './loss.service';
import { LossController } from './loss.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [LossController],
  providers: [LossService,PrismaService]
})
export class LossModule {}
