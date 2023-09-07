import { AccordionItemType } from '@wildberries/ui-kit';

export type TListItem = {
  id?: string;
  title: string;
  description: string;
  createDate: string;
};

export type TNormalizedItemData = AccordionItemType & TListItem;

export type TTodoListState = {
  isListLoading: boolean;
  isListError: boolean;
  listData: TNormalizedItemData[];
};
