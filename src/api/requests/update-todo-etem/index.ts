import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import {
  TodoItemUpdateBodyType,
  makeRequestConfig,
} from './make-request-config';

export const updateTodoItem = (
  body: TodoItemUpdateBodyType,
): Promise<IResponse> => new RestRequest().putRequest(makeRequestConfig(body));
