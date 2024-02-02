import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class TaskDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @Length(36)
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  dateInit: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  dateLimit: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  status: string;
}
