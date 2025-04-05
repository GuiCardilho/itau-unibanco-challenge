import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTransactionDto } from '../dtos/create-transactions.dto';
import { TransactionsService } from '../services/create-transactions.service';

@Controller('transacao')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: () => new BadRequestException(),
    }),
  )
  create(@Body() body: CreateTransactionDto) {
    this.transactionsService.create(body);
  }
}
