import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import {
  TTodoItemDeleteBodyType,
  makeRequestConfig,
} from './make-request-config';

export const deleteTodoItem = (
  body: TTodoItemDeleteBodyType,
): Promise<IResponse> =>
  new RestRequest().deleteRequest(makeRequestConfig(body));
