import { todoListCreateItemEndpoint } from '@/api/endpoints/todo-list';
import { responseSchema } from './response-schema';

export type TTodoItemCreateBody = { title: string; description: string };

export const makeRequestConfig = (todoItemBody: TTodoItemCreateBody) => ({
  endpoint: todoListCreateItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
