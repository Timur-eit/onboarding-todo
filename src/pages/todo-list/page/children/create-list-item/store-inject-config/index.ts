import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import {
  CREATE_ITEM_WATCHER_SAGA_NAME,
  TODO_LIST_REDUCER_NAME,
} from '@/pages/todo-list/_redux/todo-list';
import { createItemWatcherSaga } from '@/pages/todo-list/_redux/todo-list/sagas/create-item-watcher-saga';
import reducerTodoList from '@/pages/todo-list/_redux/todo-list/reducer';

export const storeInjectConfig = (): StoreInjectConfig => ({
  reducersToInject: [
    {
      name: TODO_LIST_REDUCER_NAME,
      reducer: reducerTodoList,
    },
  ],
  sagasToInject: [
    {
      name: CREATE_ITEM_WATCHER_SAGA_NAME,
      saga: createItemWatcherSaga,
    },
  ],
});
