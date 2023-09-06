import { todoListGetAllEndpoint } from '@/api/endpoints/todo-list';
import { responseSchema } from './response-schema';

export const makeRequestConfig = () => ({
  endpoint: todoListGetAllEndpoint,
  body: [],
  responseSchema,
});
