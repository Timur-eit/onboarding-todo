import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TTodoItemUpdateBody, makeRequestConfig } from './make-request-config';

export const updateTodoItem = (body: TTodoItemUpdateBody): Promise<IResponse> =>
  new RestRequest().putRequest(makeRequestConfig(body));
