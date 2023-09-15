import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import reducerTodoList from '../_redux/todo-list/reducer';
import {
  INIT_LOAD_MANAGER_SAGA_WATCHER_SAGA_NAME,
  TODO_LIST_REDUCER_NAME,
} from '../_redux/todo-list';
import { initLoadManagerWatcherSaga } from '../_redux/todo-list/sagas/init-load-manager-watcher-saga';
import { getListConfig } from './get-list-config';

export const storeInjectConfig = (): StoreInjectConfig => ({
  initialLoadManagerConfig: {
    requestConfigList: [getListConfig()],
  },
  reducersToInject: [
    {
      name: TODO_LIST_REDUCER_NAME,
      reducer: reducerTodoList,
    },
  ],
  sagasToInject: [
    {
      name: INIT_LOAD_MANAGER_SAGA_WATCHER_SAGA_NAME,
      saga: initLoadManagerWatcherSaga,
    },
  ],
});
