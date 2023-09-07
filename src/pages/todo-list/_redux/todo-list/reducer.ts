import {
  SET_IS_ERROR_LIST,
  SET_IS_LOADING_LIST,
  SET_TODO_LIST_DATA,
} from './actions';
import { NormalizedItemData, TodoListStateType } from './types';

export const initialState: TodoListStateType = {
  isListLoading: false,
  isListError: false,
  listData: [],
};

type ActionsType = {
  type: string;
  payload: NormalizedItemData[] | boolean;
};

const reducer = (
  state: TodoListStateType = initialState,
  { type, payload }: ActionsType,
): TodoListStateType => {
  switch (type) {
    case SET_IS_LOADING_LIST:
      return {
        ...state,
        isListLoading: payload as boolean,
      };
    case SET_IS_ERROR_LIST:
      return {
        ...state,
        isListError: payload as boolean,
      };
    case SET_TODO_LIST_DATA:
      return {
        ...state,
        listData: payload as NormalizedItemData[],
      };
    default:
      return state;
  }
};

export default reducer;
