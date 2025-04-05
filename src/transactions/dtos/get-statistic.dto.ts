export class GetStatisticResponseDto {
  count!: number;
  sum!: number;
  avg!: number;
  min!: number;
  max!: number;

  constructor(data: {
    count?: number;
    sum?: number;
    avg?: number;
    min?: number;
    max?: number;
  }) {
    this.count = data.count || 0;
    this.sum = data.sum || 0;
    this.avg = data.avg || 0;
    this.min = data.min || 0;
    this.max = data.max || 0;
  }
}
