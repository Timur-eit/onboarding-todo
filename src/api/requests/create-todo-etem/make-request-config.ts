import { todoListCreateItemEndpoint } from '@/api/endpoints/todo-list';
import { ListItemType } from '@/pages/todo-list/page/_types/todo-model';
import { responseSchema } from './response-schema';

export type TodoItemCreateBodyType = Omit<ListItemType, 'id' | 'createDate'>;

export const makeRequestConfig = (todoItemBody: TodoItemCreateBodyType) => ({
  endpoint: todoListCreateItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
