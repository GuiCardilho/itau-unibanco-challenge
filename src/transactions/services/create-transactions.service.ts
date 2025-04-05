import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dtos/create-transactions.dto';
import { Transaction } from '../entities/transaction.entity';
import { TransactionsRepository } from '../repositories/transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  create(dto: CreateTransactionDto): void {
    const transaction = new Transaction({
      valor: dto.valor,
      dataHora: new Date(dto.dataHora),
    });
    this.transactionsRepository.add(transaction);
  }
}
