import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpportunityModule } from './opportunity/opportunity.module';
import { InboundModule } from './inbound/inbound.module';
import { OutboundModule } from './outbound/outbound.module';
import { LossModule } from './loss/loss.module';
import { FinanceModule } from './finance/finance.module';
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
  providers: [AppService],
})
export class AppModule {}
