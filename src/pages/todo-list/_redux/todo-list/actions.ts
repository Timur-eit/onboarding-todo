import { BaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import { NormalizedItemData } from './types';

export const SET_IS_LOADING_LIST = 'SET_IS_LOADING_LIST';
export const setIsLoadingListAction: IReduxAction<
  boolean,
  typeof SET_IS_LOADING_LIST
> = (payload) => ({
  type: SET_IS_LOADING_LIST,
  payload,
});
setIsLoadingListAction.type = SET_IS_LOADING_LIST;

export const SET_IS_ERROR_LIST = 'SET_IS_ERROR_LIST';
export const setIsErrorListAction: IReduxAction<
  boolean,
  typeof SET_IS_ERROR_LIST
> = (payload) => ({
  type: SET_IS_ERROR_LIST,
  payload,
});
setIsErrorListAction.type = SET_IS_ERROR_LIST;

export const GET_TODO_LIST_DATA = 'GET_TODO_LIST_DATA';
export const getTodoListDataAction: BaseAction = () => ({
  type: GET_TODO_LIST_DATA,
});

export const SET_TODO_LIST_DATA = 'SET_TODO_LIST_DATA';
export const setTodoListDataAction: IReduxAction<
  NormalizedItemData[],
  typeof SET_TODO_LIST_DATA
> = (payload) => ({
  type: SET_TODO_LIST_DATA,
  payload,
});
setTodoListDataAction.type = SET_TODO_LIST_DATA;
