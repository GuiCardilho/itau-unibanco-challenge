import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetStatisticResponseDto } from '../dtos/get-statistic.dto';
import { GetStatisticsService } from '../services/get-statistics.service';

@ApiTags('statistics')
@Controller('estatisticas')
export class GetStatisticsController {
  constructor(private readonly getStatisticsService: GetStatisticsService) {}

  @Get()
  @ApiOperation({ summary: 'Get statistics' })
  @ApiResponse({
    status: 200,
    description: 'Statistics retrieved successfully',
    type: GetStatisticResponseDto,
    example: {
      count: 10,
      sum: 100,
      avg: 10,
      min: 1,
      max: 100,
    },
  })
  getStatistics() {
    return this.getStatisticsService.execute();
  }
}
