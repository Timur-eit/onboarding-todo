import {
  IAdvancedStore,
  InitLoadManagerRequestOptionsType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import { Dispatch } from 'redux';
import { deleteTodoItem } from '@/api/requests/delete-todo-item';
import { TTodoItemDeleteBodyType } from '@/api/requests/delete-todo-item/make-request-config';
import {
  ETodoErrors,
  ETodoLoadings,
  setErrorsAction,
  setLoadingsAction,
} from '../_redux/todo-list';
import { getListConfig } from './get-list-config';

const callBackOnSuccess = (params: {
  dispatch: Dispatch;
  responseData: any;
  store: IAdvancedStore;
}) => {
  params.dispatch(
    initLoadManagerActionSaga({ requestConfigList: [getListConfig()] }),
  );
};

const callBackOnError = (params: {
  dispatch: Dispatch;
  store: IAdvancedStore;
}) => params.dispatch(setErrorsAction({ [ETodoErrors.DELETE_ITEM]: true }));

export const deleteItemConfig = (
  requestBody: TTodoItemDeleteBodyType,
): InitLoadManagerRequestOptionsType => ({
  request: () => deleteTodoItem({ ...requestBody }),
  isDataCritical: true,
  showErrorNotification: true,
  showSuccessNotification: false,
  callBackOnSuccess,
  callBackOnError,
  loadingStopAction: () =>
    setLoadingsAction({ [ETodoLoadings.DELETE_ITEM]: false }),
  loadingStartAction: () =>
    setLoadingsAction({ [ETodoLoadings.DELETE_ITEM]: true }),
});
