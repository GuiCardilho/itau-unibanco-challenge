import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Valor da transação',
    example: 100,
  })
  @IsNumber()
  valor!: number;

  @ApiProperty({
    description: 'Data e hora da transação',
    example: '2021-01-01T00:00:00.000Z',
  })
  @IsString()
  dataHora!: string;
}
