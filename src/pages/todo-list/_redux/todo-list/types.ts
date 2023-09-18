import { Router } from 'router5';

export enum ETodoLoadings {
  GET_ALL = 'GET_ALL',
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE',
  DELETE_ITEM = 'DELETE_ITEM',
}

export enum ETodoErrors {
  GET_ALL = 'GET_ALL',
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE',
  DELETE_ITEM = 'DELETE_ITEM',
}

export type TListItem = {
  id: string;
  title: string;
  createDate: string;
  description: string;
};

export type TTodoListState = {
  loadings: { [key in ETodoLoadings]?: boolean };
  errors: { [key in ETodoErrors]?: boolean };
  listData: TListItem[];
  isEditModalOpen: boolean;
  editItemId: string | null;
};

export type TCreateItemPayload = Pick<TListItem, 'title' | 'description'> & {
  router: Router;
};
export type TUpdateItemPayload = Pick<
  TListItem,
  'id' | 'title' | 'description'
>;
export type TDeleteItemPayload = Pick<TListItem, 'id'>;

export type TCreateItemActionSaga = {
  type: string;
  payload: TCreateItemPayload;
};
