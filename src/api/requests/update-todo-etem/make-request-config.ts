import { todoListUpdateItemEndpoint } from '@/api/endpoints/todo-list';
import { ListItemType } from '@/pages/todo-list/page/_types/todo-model';
import { responseSchema } from './response-schema';

export type TodoItemUpdateBodyType = Omit<ListItemType, 'createDate'>;

export const makeRequestConfig = (todoItemBody: TodoItemUpdateBodyType) => ({
  endpoint: todoListUpdateItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
