import { todoListUpdateItemEndpoint } from '@/api/endpoints/todo-list';
import { TListItem } from '@/pages/todo-list/page/_types/todo-model';
import { responseSchema } from './response-schema';

export type TTodoItemUpdateBody = Omit<TListItem, 'createDate'>;

export const makeRequestConfig = (todoItemBody: TTodoItemUpdateBody) => ({
  endpoint: todoListUpdateItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
