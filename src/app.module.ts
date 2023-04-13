import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinanceModule } from './finance/finance.module';
import { InboundModule } from './inbound/inbound.module';
import { LossModule } from './loss/loss.module';
import { OpportunityModule } from './opportunity/opportunity.module';
import { OutboundModule } from './outbound/outbound.module';
import { PrismaService } from './prisma.service';
import { StatisticsModule } from './statistics/statistics.module';
import { WelcomeModule } from './welcome/welcome.module';

@Module({
  imports: [
    OpportunityModule,
    InboundModule,
    OutboundModule,
    LossModule,
    FinanceModule,
    StatisticsModule,
    WelcomeModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
