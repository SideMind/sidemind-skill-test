import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrismaService } from '../database/prisma.service';
import { Task } from './entities/task.entity';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  const data = {
    // id: null,
    // name: 'Primeira Task',
    // dateInit: null,
    // dateLimit: null,
    // status: null,
  } as unknown as Task;
  const taskObj = {
    // id: '10cd9517-360b-4a35-a963-c3c6ffbc2c23',
    // name: 'Primeira Task',
    // dateInit: new Date(Date.now()),
    // dateLimit: null,
    // status: 'Todo',
  } as unknown as Task;

  const taskObjArray = [
    {
      // id: '10cd9517-360b-4a35-a963-c3c6ffbc2c23',
      // name: 'Segunda Task',
      // dateInit: new Date(Date.now()),
      // dateLimit: new Date(Date.now()),
      // status: 'Doing',
    },
  ] as unknown as Task[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService, PrismaService],
    }).compile();

    service = module.get<TaskService>(TaskService);
    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return a task', async () => {
      jest.spyOn(service, 'create').mockImplementation(async () => taskObj);

      expect(await controller.create(data)).toBe(taskObj);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => taskObjArray);

      expect(await controller.findAll()).toBe(taskObjArray);
    });
  });

  describe('update', () => {
    it('should return the updated task', async () => {
      jest.spyOn(service, 'update').mockImplementation(async () => taskObj);

      expect(await controller.update(data.id, data)).toBe(taskObj);
    });
  });

  describe('delete', () => {
    it('should return the deleted task', async () => {
      jest.spyOn(service, 'delete').mockImplementation(async () => taskObj);

      expect(await controller.delete(data.id)).toBe(
        'Task deleted successfully',
      );
    });
  });
});
