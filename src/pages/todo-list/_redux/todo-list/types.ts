import { AccordionItemType } from '@wildberries/ui-kit';

export enum ETodoLoadErrorState {
  GET_ALL = 'GET_ALL',
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE',
  DELETE_ITEM = 'DELETE_ITEM',
}

export type TListItem = {
  id: string;
  radioValue: string;
  title: string;
  content: {
    title: string;
    description: string;
    createDate: string;
  };
};

export type TNormalizedItemData = AccordionItemType;

export type TTodoListState = {
  loadings: { [key in ETodoLoadErrorState]?: boolean };
  errors: { [key in ETodoLoadErrorState]?: boolean };
  listData: TNormalizedItemData[];
};
