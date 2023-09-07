import { AccordionItemType } from '@wildberries/ui-kit';
import { TListItem } from '../types';

export const normalizeListData = (
  responseData: TListItem[],
): Array<AccordionItemType> =>
  responseData.map(({ id, createDate, title, description }) => ({
    id,
    title,
    radioValue: id,
    content: {
      title,
      createDate,
      description,
    },
  }));
