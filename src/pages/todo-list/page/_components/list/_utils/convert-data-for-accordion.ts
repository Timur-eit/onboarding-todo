import { AccordionItemType } from '@wildberries/ui-kit';
import { TListItem } from '@/pages/todo-list/_redux/todo-list';

export const convertForAccordion = (
  responseData: TListItem[],
): AccordionItemType[] =>
  responseData.map(({ id, createDate, title, description }) => ({
    id,
    title,
    radioValue: id,
    content: {
      id,
      createDate,
      description,
    },
  }));
