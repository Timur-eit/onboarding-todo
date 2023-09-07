import { AccordionItemType } from '@wildberries/ui-kit';
import { TListItem } from '../types';

export const normalizeListData = (
  responseData: TListItem[],
): Array<AccordionItemType & TListItem> =>
  responseData.map(({ id, createDate, title, description }) => ({
    id,
    createDate,
    title,
    description,
    radioValue: id,
    content: {
      title,
      createDate,
      description,
    },
  }));
