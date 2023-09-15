import { TListItem } from '@/pages/todo-list/_redux/todo-list';
import { TTodoItemUpdateBody } from '@/api/requests/update-todo-item/make-request-config';
import { TItemFormValues } from '../_components/_view-components/item-form/types';

type TParams = {
  initItemData: TListItem;
  formValues: TItemFormValues;
};

export const getUpdateRequestBody = ({
  initItemData,
  formValues: { title, description },
}: TParams): TTodoItemUpdateBody => {
  const isTitleChanged = initItemData.title !== title;
  const isDescriptionChanged = initItemData.description !== description;

  const requestBody: TTodoItemUpdateBody = { id: initItemData.id };
  if (isTitleChanged) {
    requestBody.title = title.trim();
  }
  if (isDescriptionChanged) {
    requestBody.description = description.trim();
  }

  return requestBody;
};
