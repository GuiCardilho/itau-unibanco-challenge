import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/create-transactions.controller';
import { TransactionsRepository } from './repositories/transactions.repository';
import { TransactionsService } from './services/create-transactions.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionsRepository],
  exports: [TransactionsService],
})
export class TransactionsModule {}
