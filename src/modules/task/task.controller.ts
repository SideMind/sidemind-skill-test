import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './task.dto';

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
}
