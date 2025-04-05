import { Injectable } from '@nestjs/common';
import {
  GetStatisticQueryDto,
  GetStatisticResponseDto,
} from '../dtos/get-statistic.dto';
import { TransactionsRepository } from '../repositories/transactions.repository';

@Injectable()
export class GetStatisticsQuery {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  execute(query: GetStatisticQueryDto): GetStatisticResponseDto {
    const preTransactions = this.transactionsRepository.getTransactions();

    const transactions = preTransactions.filter((transaction) => {
      const timeDiff = new Date().getTime() - transaction.dataHora.getTime();
      return timeDiff <= (query.seconds ?? 60) * 1000;
    });

    if (transactions.length === 0) {
      return new GetStatisticResponseDto({});
    }

    const sum = transactions.reduce((acc, t) => acc + t.valor, 0);

    return new GetStatisticResponseDto({
      count: transactions.length,
      sum,
      avg: sum / transactions.length,
      min: Math.min(...transactions.map((t) => t.valor)),
      max: Math.max(...transactions.map((t) => t.valor)),
    });
  }
}
