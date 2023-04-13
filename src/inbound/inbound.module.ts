import { Module } from '@nestjs/common';
import { InboundService } from './inbound.service';
import { InboundController } from './inbound.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [InboundController],
  providers: [InboundService,PrismaService]
})
export class InboundModule {}
