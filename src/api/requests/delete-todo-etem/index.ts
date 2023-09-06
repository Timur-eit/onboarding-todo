import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import {
  TodoItemDeleteBodyType,
  makeRequestConfig,
} from './make-request-config';

export const deleteTodoItem = (
  body: TodoItemDeleteBodyType,
): Promise<IResponse> =>
  new RestRequest().deleteRequest(makeRequestConfig(body));
