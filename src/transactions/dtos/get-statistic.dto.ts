import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class GetStatisticQueryDto {
  @IsNumber()
  @IsOptional()
  @IsPositive()
  @IsInt()
  @ApiProperty({
    description: 'Time period in seconds',
    example: 60,
  })
  @Transform(({ value }: { value: string }) => parseInt(value))
  @IsOptional()
  seconds?: number;
}

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
