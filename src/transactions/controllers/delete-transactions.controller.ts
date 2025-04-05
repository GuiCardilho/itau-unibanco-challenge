import { Controller, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteTransactionsService } from '../services/delete-transactions.service';

@ApiTags('transactions')
@Controller('transacao')
export class DeleteTransactionsController {
  constructor(
    private readonly deleteTransactionsService: DeleteTransactionsService,
  ) {}

  @Delete()
  @ApiOperation({ summary: 'Delete all transactions' })
  @ApiResponse({ status: 200, description: 'All transactions deleted' })
  clear() {
    this.deleteTransactionsService.clear();
  }
}
