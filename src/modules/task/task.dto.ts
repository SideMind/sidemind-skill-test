import { Status } from './task.status';

export type TaskDTO = {
  id?: string;
  name: string;
  dateInit: Date;
  dateLimit?: Date;
  status: Status;
};
