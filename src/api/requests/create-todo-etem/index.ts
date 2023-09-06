import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import {
  TodoItemCreateBodyType,
  makeRequestConfig,
} from './make-request-config';

export const createTodoItem = (
  body: TodoItemCreateBodyType,
): Promise<IResponse> => new RestRequest().postRequest(makeRequestConfig(body));
