import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OutboundController } from './outbound.controller';
import { OutboundService } from './outbound.service';

@Module({
  controllers: [OutboundController],
  providers: [OutboundService, PrismaService],
})
export class OutboundModule {}
