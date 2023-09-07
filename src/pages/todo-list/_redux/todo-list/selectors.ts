import { DefaultRootState } from 'react-redux';
import { createSelector } from 'reselect';
import { TODO_LIST_REDUCER_NAME } from './constants';
import { initialState } from './reducer';
import { TodoListStateType } from './types';

export const todoListStorageSelector = (store: DefaultRootState) =>
  store[TODO_LIST_REDUCER_NAME] || initialState;

export const getIsListLoading = createSelector(
  [todoListStorageSelector],
  ({ isListLoading }: TodoListStateType) => isListLoading,
);

export const getIsListError = createSelector(
  [todoListStorageSelector],
  ({ isListError }: TodoListStateType) => isListError,
);

export const getListData = createSelector(
  [todoListStorageSelector],
  ({ listData }: TodoListStateType) => listData,
);
