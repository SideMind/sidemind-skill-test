import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { PrismaService } from './../database/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  //async create(data: TaskDTO){}
}
