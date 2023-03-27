export type TodoStatus = 'pending' | 'completed';

export interface Todo {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
  status: TodoStatus;
}
