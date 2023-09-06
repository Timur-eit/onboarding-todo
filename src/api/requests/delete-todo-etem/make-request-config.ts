import { todoListDeleteItemEndpoint } from '@/api/endpoints/todo-list';
import { responseSchema } from './response-schema';

export type TodoItemDeleteBodyType = { id: string };

export const makeRequestConfig = (todoItemBody: TodoItemDeleteBodyType) => ({
  endpoint: todoListDeleteItemEndpoint,
  body: todoItemBody,
  responseSchema,
});
