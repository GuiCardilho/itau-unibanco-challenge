import { Module } from '@nestjs/common';
import { HealthModule } from 'src/health/health.module';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [HealthModule, TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
