import { BaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import {
  TTodoListState,
  TListItem,
  TCreateItemPayload,
  TUpdateItemPayload,
  TDeleteItemPayload,
} from './types';

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

export const SET_EDIT_MODAL_OPEN = 'SET_EDIT_MODAL_OPEN';
export const setEditModalOpenAction: IReduxAction<
  boolean,
  typeof SET_EDIT_MODAL_OPEN
> = (payload) => ({
  type: SET_EDIT_MODAL_OPEN,
  payload,
});
setEditModalOpenAction.type = SET_EDIT_MODAL_OPEN;

export const SET_EDIT_ITEM_ID = 'SET_EDIT_ITEM_ID';
export const setEditIItemIdAction: IReduxAction<
  string,
  typeof SET_EDIT_ITEM_ID
> = (payload) => ({
  type: SET_EDIT_ITEM_ID,
  payload,
});
setEditIItemIdAction.type = SET_EDIT_ITEM_ID;

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItemAction: IReduxAction<
  TUpdateItemPayload,
  typeof UPDATE_ITEM
> = (payload) => ({
  type: UPDATE_ITEM,
  payload,
});
updateItemAction.type = UPDATE_ITEM;

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItemAction: IReduxAction<
  TDeleteItemPayload,
  typeof DELETE_ITEM
> = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
deleteItemAction.type = DELETE_ITEM;
