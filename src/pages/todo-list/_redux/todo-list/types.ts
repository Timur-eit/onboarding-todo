export enum ETodoLoadErrorState {
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
  loadings: { [key in ETodoLoadErrorState]?: boolean };
  errors: { [key in ETodoLoadErrorState]?: boolean };
  listData: TListItem[];
};
