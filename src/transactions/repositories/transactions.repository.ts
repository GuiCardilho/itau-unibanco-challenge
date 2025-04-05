import { Injectable } from '@nestjs/common';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class TransactionsRepository {
  private transactions: Transaction[] = [];

  add(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  clear() {
    this.transactions = [];
  }
}
