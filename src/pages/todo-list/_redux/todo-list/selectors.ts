import { DefaultRootState } from 'react-redux';
import { createSelector } from 'reselect';
import { TODO_LIST_REDUCER_NAME } from './constants';
import { initialState } from './reducer';
import { TTodoListState } from './types';

export const todoListStorageSelector = (store: DefaultRootState) =>
  store[TODO_LIST_REDUCER_NAME] || initialState;

export const getLoadings = createSelector(
  [todoListStorageSelector],
  ({ loadings }: TTodoListState) => loadings,
);

export const getErrors = createSelector(
  [todoListStorageSelector],
  ({ errors }: TTodoListState) => errors,
);

export const getListData = createSelector(
  [todoListStorageSelector],
  ({ listData }: TTodoListState) => listData,
);
