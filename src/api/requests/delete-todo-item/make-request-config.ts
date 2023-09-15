import { todoListDeleteItemEndpoint } from '@/api/endpoints/todo-list';
import { responseSchema } from './response-schema';

export type TTodoItemDeleteBodyType = { id: string };

export const makeRequestConfig = (todoItemBody: TTodoItemDeleteBodyType) => ({
  endpoint: todoListDeleteItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
