import { BaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import { TTodoListState, TListItem, TCreateItemPayload } from './types';

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
export const setListAction: IReduxAction<TListItem[], typeof SET_LIST> = (
  payload,
) => ({
  type: SET_LIST,
  payload,
});
setListAction.type = SET_LIST;

export const CREATE_ITEM = 'CREATE_ITEM';
export const createItemAction: IReduxAction<
  TCreateItemPayload,
  typeof CREATE_ITEM
> = (payload) => ({
  type: CREATE_ITEM,
  payload,
});
createItemAction.type = CREATE_ITEM;

export const SET_COMPLETE_STATUS = 'SET_COMPLETE_STATUS';
export const setCompleteAction: IReduxAction<
  TTodoListState['completeStatuses'],
  typeof SET_COMPLETE_STATUS
> = (payload) => ({
  type: SET_COMPLETE_STATUS,
  payload,
});
setCompleteAction.type = SET_COMPLETE_STATUS;
