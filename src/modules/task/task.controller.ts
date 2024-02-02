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
import { TaskDTO } from './dto/task.dto';
import { isObject } from 'class-validator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a task' })
  @ApiResponse({
    status: 201,
    description: 'The created record',
    type: Task,
  })
  async create(@Body() data: TaskDTO): Promise<Task> {
    return this.taskService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Return all tasks' })
  async findAll() {
    return this.taskService.findAll();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'The updated record',
    type: Task,
  })
  async update(@Param('id') id: string, @Body() data: TaskDTO) {
    return this.taskService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  async delete(@Param('id') id: string) {
    const response = await this.taskService.delete(id);
    if (isObject(response)) {
      return 'Task deleted successfully';
    }
  }
}
