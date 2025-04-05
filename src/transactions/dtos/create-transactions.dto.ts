import { IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  valor!: number;

  @IsString()
  dataHora!: string;
}
