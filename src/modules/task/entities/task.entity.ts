import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Task {
  /**
   * The name of the Task
   * @example Wash the dishes
   */
  @ApiProperty({
    example: 'Brush your teeth',
    description: 'The name of the task is required and unique',
  })
  name: string;

  @ApiPropertyOptional({
    example: '2024-01-01T00:00:00.000Z',
    description:
      'The initial date of the task. If you don`t give a initial date, the ORM will take care of it (current date/time)',
  })
  dateInit: Date;

  @ApiPropertyOptional({
    default: null,
    example: '2024-12-31T23:59:59.999Z',
    description: 'The final date of the task',
  })
  dateLimit: Date;

  @ApiPropertyOptional({
    example: 'Doing',
    description:
      'The current status of the Task. If you don`t enter it, the ORM will add "Todo"',
  })
  status: string;
}
