import {
  SET_IS_ERROR_LIST,
  SET_IS_LOADING_LIST,
  SET_TODO_LIST_DATA,
  setIsErrorListAction,
  setIsLoadingListAction,
  setTodoListDataAction,
} from './actions';
import { TodoListStateType } from './types';

export const initialState: TodoListStateType = {
  isListLoading: false,
  isListError: false,
  listData: [],
};

type ActionsType = ReturnType<
  | typeof setIsLoadingListAction
  | typeof setIsErrorListAction
  | typeof setTodoListDataAction
>;

const reducer = (
  state: TodoListStateType = initialState,
  { type, payload }: ActionsType,
): TodoListStateType => {
  switch (type) {
    case SET_IS_LOADING_LIST:
      return {
        ...state,
        isListLoading: payload,
      };
    case SET_IS_ERROR_LIST:
      return {
        ...state,
        isListError: payload,
      };
    case SET_TODO_LIST_DATA:
      return {
        ...state,
        listData: payload,
      };
    default:
      return state;
  }
};

export default reducer;
