import {
  IAdvancedStore,
  StoreInjectConfig,
} from '@mihanizm56/redux-core-modules';
import { Dispatch } from 'redux';
import { getTodoList } from '@/api/requests/get-todo-list-all';
import reducerTodoList from '../_redux/todo-list/reducer';
import {
  DELETE_ITEM_WATCHER_SAGA_NAME,
  ETodoErrors,
  ETodoLoadings,
  TODO_LIST_REDUCER_NAME,
  UPDATE_ITEM_WATCHER_SAGA_NAME,
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from '../_redux/todo-list';
import { updateItemWatcherSaga } from '../_redux/todo-list/sagas/update-item-watcher-saga';
import { deleteItemWatcherSaga } from '../_redux/todo-list/sagas/delete-item-watcher-saga';

type TParams = {
  store: IAdvancedStore;
};

const callBackOnSuccess = (params: {
  dispatch: Dispatch;
  responseData: any;
  store: IAdvancedStore;
}) => params.dispatch(setListAction(params.responseData));

const callBackOnError = (params: {
  dispatch: Dispatch;
  store: IAdvancedStore;
  error: any;
}) => params.dispatch(setErrorsAction({ [ETodoErrors.UPDATE_ITEM]: true }));

export const storeInjectConfig = ({ store }: TParams): StoreInjectConfig => ({
  // additionalConfig: {
  //   callbackOnMount: () => store.dispatch(getListAction()),
  // },
  initialLoadManagerConfig: {
    requestConfigList: [
      {
        request: getTodoList,
        isDataCritical: true,
        showErrorNotification: true,
        showSuccessNotification: false,
        callBackOnSuccess,
        callBackOnError,
        loadingStopAction: () =>
          store.dispatch(setLoadingsAction({ [ETodoLoadings.GET_ALL]: false })),
        loadingStartAction: () =>
          store.dispatch(setLoadingsAction({ [ETodoLoadings.GET_ALL]: true })),
      },
    ],
  },
  reducersToInject: [
    {
      name: TODO_LIST_REDUCER_NAME,
      reducer: reducerTodoList,
    },
  ],
  sagasToInject: [
    // {
    //   name: GET_TODO_LIST_DATA_WATCHER_SAGA_NAME,
    //   saga: getTodoListDataWatcherSaga,
    // },
    {
      name: UPDATE_ITEM_WATCHER_SAGA_NAME,
      saga: updateItemWatcherSaga,
    },
    {
      name: DELETE_ITEM_WATCHER_SAGA_NAME,
      saga: deleteItemWatcherSaga,
    },
  ],
});
