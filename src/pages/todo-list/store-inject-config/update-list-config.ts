import {
  IAdvancedStore,
  InitLoadManagerRequestOptionsType,
} from '@mihanizm56/redux-core-modules';
import { Dispatch } from 'redux';
import { batchActions } from 'redux-batched-actions';
import { updateTodoItem } from '@/api/requests/update-todo-item';
import { TTodoItemUpdateBody } from '@/api/requests/update-todo-item/make-request-config';
import {
  ETodoErrors,
  ETodoLoadings,
  initLoadManagerAction,
  setEditIItemIdAction,
  setEditModalOpenAction,
  setErrorsAction,
  setLoadingsAction,
} from '../_redux/todo-list';
import { getListConfig } from './get-list-config';

const callBackOnSuccess = (params: {
  dispatch: Dispatch;
  responseData: any;
  store: IAdvancedStore;
}) => {
  batchActions([
    params.dispatch(
      initLoadManagerAction({ requestConfigList: [getListConfig()] }),
    ),
    params.dispatch(setEditModalOpenAction(false)),
    params.dispatch(setEditIItemIdAction(null)),
  ]);
};

const callBackOnError = (params: {
  dispatch: Dispatch;
  store: IAdvancedStore;
}) => params.dispatch(setErrorsAction({ [ETodoErrors.UPDATE_ITEM]: true }));

export const updateListConfig = (
  requestBody: TTodoItemUpdateBody,
): InitLoadManagerRequestOptionsType => ({
  request: () => updateTodoItem({ ...requestBody }),
  isDataCritical: true,
  showErrorNotification: true,
  showSuccessNotification: false,
  callBackOnSuccess,
  callBackOnError,
  loadingStopAction: () =>
    setLoadingsAction({ [ETodoLoadings.UPDATE_ITEM]: false }),
  loadingStartAction: () =>
    setLoadingsAction({ [ETodoLoadings.UPDATE_ITEM]: true }),
});
