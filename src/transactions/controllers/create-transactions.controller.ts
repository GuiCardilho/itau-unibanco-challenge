import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTransactionDto } from '../dtos/create-transactions.dto';
import { TransactionsService } from '../services/create-transactions.service';

@ApiTags('transactions')
@Controller('transacao')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new transaction' })
  @ApiResponse({ status: 201, description: 'Transaction created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 422, description: 'Unprocessable entity' })
  create(@Body() body: CreateTransactionDto) {
    return this.transactionsService.create(body);
  }
}
