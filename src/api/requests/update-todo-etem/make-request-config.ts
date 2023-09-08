import { todoListUpdateItemEndpoint } from '@/api/endpoints/todo-list';
import { responseSchema } from './response-schema';

export type TTodoItemUpdateBody = {
  id: string;
  title: string;
  description: string;
};

export const makeRequestConfig = (todoItemBody: TTodoItemUpdateBody) => ({
  endpoint: todoListUpdateItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
