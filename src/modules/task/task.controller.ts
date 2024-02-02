import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './task.dto';
import { isObject } from 'class-validator';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() data: TaskDTO) {
    return this.taskService.create(data);
  }

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TaskDTO) {
    return this.taskService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const response = await this.taskService.delete(id);
    if (isObject(response)) {
      return 'Task deleted successfully';
    }
  }
}
