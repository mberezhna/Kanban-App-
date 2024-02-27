import { CommentType } from './type/CommentType';
import { AdminType } from './type/AdminType';

export interface TodoType {
  id: number;
  title: string;
  status: 'to_do' | 'in_progress' | 'done';
  comments: CommentType[];
  admin: AdminType;
};

const BASE_URL = 'https://github.com/mberezhna/Kanban-App-/blob/main/public/api';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

export async function getTodos(): Promise<TodoType[]> {
  return wait(300)
    .then(() => fetch(BASE_URL))
    .then(response => response.json());
};
