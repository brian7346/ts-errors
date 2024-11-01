/**
 * У всех сущностей есть общие поля.
 * Как избежать дублирования и вынести их в общий интерфейс?
 */

interface Client {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
}

interface Project {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  budget: number;
}

interface Task {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  deadline: Date;
}