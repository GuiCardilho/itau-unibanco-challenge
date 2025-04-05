import { UnprocessableEntityException } from '@nestjs/common';

export class Transaction {
  readonly valor: number;
  readonly dataHora: Date;

  constructor(data: { valor: number; dataHora: Date }) {
    this.valor = data.valor;
    this.dataHora = data.dataHora;
    this.validate();
  }

  validate(): void {
    if (this.valor < 0) {
      throw new UnprocessableEntityException();
    }

    if (isNaN(this.dataHora.getTime()) || this.dataHora > new Date()) {
      throw new UnprocessableEntityException();
    }
  }
}
