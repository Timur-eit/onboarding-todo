import {
  IAdvancedStore,
  StoreInjectConfig,
} from '@mihanizm56/redux-core-modules';
import reducerTodoList from '@/pages/todo-list/_redux/todo-list/reducer';
import { getTodoListDataWatcherSaga } from '../_redux/todo-list/sagas/get-todo-list-data-watcher-saga';
import {
  GET_TODO_LIST_DATA_WATCHER_SAGA_NAME,
  TODO_LIST_REDUCER_NAME,
  UPDATE_ITEM_WATCHER_SAGA_NAME,
  getListAction,
} from '../_redux/todo-list';
import { updateItemWatcherSaga } from '../_redux/todo-list/sagas/update-item-watcher-saga';

type TParams = {
  store: IAdvancedStore;
};

export const storeInjectConfig = ({ store }: TParams): StoreInjectConfig => ({
  additionalConfig: {
    callbackOnMount: () => store.dispatch(getListAction()),
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
    {
      name: UPDATE_ITEM_WATCHER_SAGA_NAME,
      saga: updateItemWatcherSaga,
    },
  ],
});
