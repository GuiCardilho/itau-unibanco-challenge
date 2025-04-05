import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from '../repositories/transactions.repository';

@Injectable()
export class DeleteTransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  clear() {
    this.transactionsRepository.clear();
  }
}
