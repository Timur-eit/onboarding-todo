import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TTodoItemCreateBody, makeRequestConfig } from './make-request-config';

export const createTodoItem = (body: TTodoItemCreateBody): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(body));
