import { todoListCreateItemEndpoint } from '@/api/endpoints/todo-list';
import { TListItem } from '@/pages/todo-list/page/_types/todo-model';
import { responseSchema } from './response-schema';

export type TTodoItemCreateBody = Omit<TListItem, 'id' | 'createDate'>;

export const makeRequestConfig = (todoItemBody: TTodoItemCreateBody) => ({
  endpoint: todoListCreateItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
