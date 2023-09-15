import {
  IAdvancedStore,
  InitLoadManagerRequestOptionsType,
} from '@mihanizm56/redux-core-modules';
import { Dispatch } from 'redux';
import { getTodoList } from '@/api/requests/get-todo-list-all';
import {
  ETodoErrors,
  ETodoLoadings,
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from '../_redux/todo-list';

const callBackOnSuccess = (params: {
  dispatch: Dispatch;
  responseData: Parameters<typeof setListAction>[0];
  store: IAdvancedStore;
}) => params.dispatch(setListAction(params.responseData));

const callBackOnError = (params: {
  dispatch: Dispatch;
  store: IAdvancedStore;
  error: any;
}) => params.dispatch(setErrorsAction({ [ETodoErrors.GET_ALL]: true }));

export const getListConfig = (): InitLoadManagerRequestOptionsType => ({
  request: getTodoList,
  isDataCritical: true,
  showErrorNotification: true,
  showSuccessNotification: false,
  callBackOnSuccess,
  callBackOnError,
  loadingStopAction: () =>
    setLoadingsAction({ [ETodoLoadings.GET_ALL]: false }),
  loadingStartAction: () =>
    setLoadingsAction({ [ETodoLoadings.GET_ALL]: true }),
});
