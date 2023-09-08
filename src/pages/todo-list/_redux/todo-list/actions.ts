import { BaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import { TNormalizedItemData, TTodoListState } from './types';

export const SET_LOADINGS = 'SET_LOADINGS';
export const setLoadingsAction: IReduxAction<
  TTodoListState['loadings'],
  typeof SET_LOADINGS
> = (payload) => ({
  type: SET_LOADINGS,
  payload,
});
setLoadingsAction.type = SET_LOADINGS;

export const SET_ERRORS = 'SET_ERRORS';
export const setErrorsAction: IReduxAction<
  TTodoListState['errors'],
  typeof SET_ERRORS
> = (payload) => ({
  type: SET_ERRORS,
  payload,
});
setErrorsAction.type = SET_ERRORS;

export const GET_LIST = 'GET_LIST';
export const getListAction: BaseAction = () => ({
  type: GET_LIST,
});

export const SET_LIST = 'SET_LIST';
export const setListAction: IReduxAction<
  TNormalizedItemData[],
  typeof SET_LIST
> = (payload) => ({
  type: SET_LIST,
  payload,
});
setListAction.type = SET_LIST;
