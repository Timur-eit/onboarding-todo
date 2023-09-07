import { Action, BaseAction } from '@mihanizm56/redux-core-modules';
import { NormalizedItemData } from './types';

export const SET_IS_LOADING_LIST = 'SET_IS_LOADING_LIST';
export const setIsLoadingListAction: Action<boolean> = (payload) => ({
  type: SET_IS_LOADING_LIST,
  payload,
});

export const SET_IS_ERROR_LIST = 'SET_IS_ERROR_LIST';
export const setIsErrorListAction: Action<boolean> = (payload) => ({
  type: SET_IS_ERROR_LIST,
  payload,
});

export const GET_TODO_LIST_DATA = 'GET_TODO_LIST_DATA';
export const getTodoListDataAction: BaseAction = () => ({
  type: GET_TODO_LIST_DATA,
});

export const SET_TODO_LIST_DATA = 'SET_TODO_LIST_DATA';
export const setTodoListDataAction: Action<NormalizedItemData[]> = (
  payload,
) => ({
  type: SET_TODO_LIST_DATA,
  payload,
});
