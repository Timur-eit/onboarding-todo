import { AccordionItemType } from '@wildberries/ui-kit';

export type ListItemType = {
  id?: string;
  title: string;
  description: string;
  createDate: string;
};

export type NormalizedItemData = AccordionItemType & ListItemType;

export type TodoListStateType = {
  isListLoading: boolean;
  isListError: boolean;
  listData: NormalizedItemData[];
};
