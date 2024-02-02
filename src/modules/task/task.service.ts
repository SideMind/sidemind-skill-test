import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { PrismaService } from './../database/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: TaskDTO) {
    const taksExists = await this.prisma.task.findFirst({
      where: {
        name: data.name,
      },
    });

    if (taksExists) {
      throw new Error(`Task ${data.name} already exists)`);
    }
    const task = await this.prisma.task.create({
      data: data,
    });

    return task;
  }
}
