import { ApiProperty } from '@nestjs/swagger';
import {
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Amount of the transaction',
    example: 100,
  })
  @IsNumber({}, { message: 'The transaction value must be a number' })
  @IsNotEmpty({
    message: 'The transaction value is required',
  })
  @Min(0, {
    message: 'The transaction value must be greater than 0',
  })
  valor!: number;

  @ApiProperty({
    description: 'Date and time of the transaction',
    example: '2021-01-01T00:00:00.000Z',
  })
  @IsString({
    message: 'The transaction date and time must be a string',
  })
  @IsNotEmpty({
    message: 'The transaction date and time is required',
  })
  @IsISO8601(
    {},
    {
      message:
        'The transaction date and time must be a valid ISO 8601 date and time',
    },
  )
  dataHora!: string;
}
