import {
  IAdvancedStore,
  StoreInjectConfig,
} from '@mihanizm56/redux-core-modules';
import { getTodoListDataWatcherSaga } from './sagas/get-todo-list-data-watcher-saga';
import {
  GET_TODO_LIST_DATA_WATCHER_SAGA_NAME,
  TODO_LIST_REDUCER_NAME,
} from './constants';
import reducerTodoList from './reducer';
import { getTodoListDataAction } from './actions';

type TParams = {
  store: IAdvancedStore;
};

export const storeInjectConfig = ({ store }: TParams): StoreInjectConfig => ({
  additionalConfig: {
    callbackOnMount: () => store.dispatch(getTodoListDataAction()),
  },
  reducersToInject: [
    {
      name: TODO_LIST_REDUCER_NAME,
      reducer: reducerTodoList,
    },
  ],
  sagasToInject: [
    {
      name: GET_TODO_LIST_DATA_WATCHER_SAGA_NAME,
      saga: getTodoListDataWatcherSaga,
    },
  ],
});
