import { AccordionItemType } from '@wildberries/ui-kit';

export type TListItem = {
  id?: string;
  title: string;
  description: string;
  createDate: string;
};

export type TNormalizedItemData = AccordionItemType & TListItem;

export type TTodoListState = {
  loadings: {
    isListLoading: boolean;
  };
  errors: {
    isListError: boolean;
  };
  listData: TNormalizedItemData[];
};
