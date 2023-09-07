import { AccordionItemType } from '@wildberries/ui-kit';
import { ListItemType } from '../../_types/todo-model';

export const normalizeListData = (
  responseData: ListItemType[],
): AccordionItemType[] =>
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
