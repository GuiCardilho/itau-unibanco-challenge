import { Injectable } from '@nestjs/common';
import { GetStatisticQueryDto } from '../dtos/get-statistic.dto';
import { GetStatisticsQuery } from '../queries/get-statistics.query';

@Injectable()
export class GetStatisticsService {
  constructor(private readonly getStatisticsQuery: GetStatisticsQuery) {}

  execute(query: GetStatisticQueryDto) {
    return this.getStatisticsQuery.execute(query);
  }
}
