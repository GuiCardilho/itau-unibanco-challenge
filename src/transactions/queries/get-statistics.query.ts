import { Injectable } from '@nestjs/common';
import { GetStatisticResponseDto } from '../dtos/get-statistic.dto';
import { TransactionsRepository } from '../repositories/transactions.repository';

@Injectable()
export class GetStatisticsQuery {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  execute() {
    const transactions = this.transactionsRepository.getTransactions();

    if (transactions.length === 0) {
      return new GetStatisticResponseDto({});
    }

    return new GetStatisticResponseDto({
      count: transactions.length,
      sum: transactions.reduce(
        (acc, transaction) => acc + transaction.valor,
        0,
      ),
      avg:
        transactions.reduce((acc, transaction) => acc + transaction.valor, 0) /
        transactions.length,
      min: Math.min(...transactions.map((transaction) => transaction.valor)),
      max: Math.max(...transactions.map((transaction) => transaction.valor)),
    });
  }
}
