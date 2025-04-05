import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/create-transaction.controller';
import { DeleteTransactionsController } from './controllers/delete-transactions.controller';
import { GetStatisticsController } from './controllers/get-statistics.controller';
import { GetStatisticsQuery } from './queries/get-statistics.query';
import { TransactionsRepository } from './repositories/transactions.repository';
import { TransactionsService } from './services/create-transaction.service';
import { DeleteTransactionsService } from './services/delete-transactions.service';
import { GetStatisticsService } from './services/get-statistics.service';

@Module({
  controllers: [
    TransactionsController,
    DeleteTransactionsController,
    GetStatisticsController,
  ],
  providers: [
    TransactionsService,
    TransactionsRepository,
    DeleteTransactionsService,
    GetStatisticsService,
    GetStatisticsQuery,
  ],
  exports: [TransactionsService],
})
export class TransactionsModule {}
