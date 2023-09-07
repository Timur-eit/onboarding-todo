import { ConvertedListItem, ListItemType } from '../../_types/todo-model';

export const normalizeListData = (
  responseData: ListItemType[],
): ConvertedListItem[] => {
  return responseData.map((item) => {
    const { title, createDate, description } = item;

    return {
      ...item,
      radioValue: item.id,
      content: {
        title,
        createDate,
        description,
      },
    };
  });
};
