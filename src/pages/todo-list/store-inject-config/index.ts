import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import reducerTodoList from '../_redux/todo-list/reducer';
import { TODO_LIST_REDUCER_NAME } from '../_redux/todo-list';
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
});
