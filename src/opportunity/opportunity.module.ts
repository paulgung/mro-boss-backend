import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OpportunityController } from './opportunity.controller';
import { OpportunityService } from './opportunity.service';

@Module({
  controllers: [OpportunityController],
  providers: [OpportunityService, PrismaService],
})
export class OpportunityModule {}
