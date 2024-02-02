import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({
    example: '1234abcd-12ab-34cd-56ef-123abc456def',
    description: 'UUID provided by the ORM',
  })
  id: string;

  /**
   * The name of the Task
   * @example Wash the dishes
   */
  @ApiProperty({
    example: 'Brush your teeth',
    description: 'The name of the task is required and unique',
  })
  name: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description:
      'The initial date of the task. If you don`t give a initial date, the ORM will take care of it (current date/time)',
  })
  dateInit: Date;

  @ApiProperty({
    default: null,
    example: '2024-12-31T23:59:59.999Z',
    description: 'The final date of the task',
  })
  dateLimit: Date;

  @ApiProperty({
    example: 'Doing',
    description:
      'The current status of the Task. If you don`t enter it, the ORM will add "Todo"',
  })
  status: string;
}
