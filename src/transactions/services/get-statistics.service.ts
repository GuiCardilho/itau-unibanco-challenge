import { Injectable } from '@nestjs/common';
import { GetStatisticsQuery } from '../queries/get-statistics.query';

@Injectable()
export class GetStatisticsService {
  constructor(private readonly getStatisticsQuery: GetStatisticsQuery) {}

  execute() {
    return this.getStatisticsQuery.execute();
  }
}
