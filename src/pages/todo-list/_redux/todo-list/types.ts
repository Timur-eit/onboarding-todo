import { AccordionItemType } from '@wildberries/ui-kit';

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
  loadings: {
    isListLoading: boolean;
  };
  errors: {
    isListError: boolean;
  };
  listData: TNormalizedItemData[];
};
