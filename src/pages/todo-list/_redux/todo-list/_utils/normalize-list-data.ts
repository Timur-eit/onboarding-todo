import { AccordionItemType } from '@wildberries/ui-kit';
import { ListItemType } from '../types';

export const normalizeListData = (
  responseData: ListItemType[],
): Array<AccordionItemType & ListItemType> =>
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
