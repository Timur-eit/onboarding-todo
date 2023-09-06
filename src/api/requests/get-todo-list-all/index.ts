import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const getTodoList = (): Promise<IResponse> =>
  new RestRequest().getRequest(makeRequestConfig());
