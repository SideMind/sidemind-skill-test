import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class TaskDTO {
  @IsOptional()
  @Length(36)
  id: string;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsDate()
  dateInit: Date;

  @IsOptional()
  @IsDate()
  dateLimit: Date;

  @IsOptional()
  @IsString()
  status: string;
}
