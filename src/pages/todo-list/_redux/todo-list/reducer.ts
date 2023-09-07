import {
  SET_IS_ERROR_LIST,
  SET_IS_LOADING_LIST,
  SET_TODO_LIST_DATA,
  setIsErrorListAction,
  setIsLoadingListAction,
  setTodoListDataAction,
} from './actions';
import { TTodoListState } from './types';

export const initialState: TTodoListState = {
  loadings: {
    isListLoading: false,
  },
  errors: {
    isListError: false,
  },
  listData: [],
};

type ActionsType = ReturnType<
  | typeof setIsLoadingListAction
  | typeof setIsErrorListAction
  | typeof setTodoListDataAction
>;

const reducer = (
  state: TTodoListState = initialState,
  { type, payload }: ActionsType,
): TTodoListState => {
  switch (type) {
    case SET_IS_LOADING_LIST:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          isListLoading: payload,
        },
      };
    case SET_IS_ERROR_LIST:
      return {
        ...state,
        errors: {
          ...state.errors,
          isListError: payload,
        },
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
