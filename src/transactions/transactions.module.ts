import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/create-transaction.controller';
import { DeleteTransactionsController } from './controllers/delete-transactions.controller';
import { TransactionsRepository } from './repositories/transactions.repository';
import { TransactionsService } from './services/create-transaction.service';
import { DeleteTransactionsService } from './services/delete-transactions.service';

@Module({
  controllers: [TransactionsController, DeleteTransactionsController],
  providers: [
    TransactionsService,
    TransactionsRepository,
    DeleteTransactionsService,
  ],
  exports: [TransactionsService],
})
export class TransactionsModule {}
