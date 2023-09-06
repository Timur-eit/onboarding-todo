import { ButtonLink, PanelDataContentType, Text } from '@wildberries/ui-kit';
import { memo } from 'react';
import { ConvertedListItem, ListItemType } from '../../_types/todo-model';

export const normalizeListData = (
  responseData: ListItemType[],
): ConvertedListItem[] => {
  return responseData.map((item) => {
    const { title, description } = item;

    return {
      ...item,
      radioValue: item.id,
      content: {
        title,
        description,
      },
    };
  });
};

export const PanelContent = memo(({ data }: PanelDataContentType) => (
  <div>
    <Text color="purple" size="h3" text={data.description} />
    <Text color="orange" size="h3" text={data.createDate} />
    <ButtonLink
      // onClick={() => alert('delete')}
      size="small"
      text="Редактировать"
      variant="interface"
    />
  </div>
));
