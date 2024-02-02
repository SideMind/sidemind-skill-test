import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { PrismaService } from './../database/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: TaskDTO) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        name: data.name,
      },
    });

    if (taskExists) {
      throw new Error(`Task ${data.name} already exists)`);
    }
    const task = await this.prisma.task.create({
      data: data,
    });

    return task;
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async update(id: string, data: TaskDTO) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!taskExists) {
      throw new Error(`Task not found)`);
    }

    const nameExists = await this.prisma.task.findUnique({
      where: {
        name: data.name,
        NOT: { id: taskExists.id },
      },
    });

    if (nameExists) {
      throw new Error(`Trying to update with a task name that already exists`);
    }

    const task = await this.prisma.task.update({
      data,
      where: {
        id,
      },
    });

    return task;
  }
}
