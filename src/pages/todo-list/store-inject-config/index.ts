import {
  IAdvancedStore,
  StoreInjectConfig,
} from "@mihanizm56/redux-core-modules";
import { Dispatch } from "redux";
import { getTodoList } from "@/api/requests/get-todo-list-all";
import reducerTodoList from "../_redux/todo-list/reducer";
import {
  ETodoErrors,
  ETodoLoadings,
  TODO_LIST_REDUCER_NAME,
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from "../_redux/todo-list";

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
});
