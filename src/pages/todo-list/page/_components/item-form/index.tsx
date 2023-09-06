import { memo } from 'react';
import { SimpleInput, TextAreaInput } from '@wildberries/ui-kit';
import { ListItemType } from '../../types';
import { ItemFormFields } from './types';

type PropsType = {
  todoItem?: ListItemType;
};

export const ItemForm = memo(({ todoItem }: PropsType) => {
  // Todo delete eslint-disable
  // eslint-disable-next-line no-console
  const submitHandler = () => console.log('form submitted');
  // TODO выяснить какая либа для формы и описать логику инициализации формы для создания / редактирования

  return (
    <form onSubmit={submitHandler}>
      <SimpleInput
        id={ItemFormFields.NAME}
        name={ItemFormFields.NAME}
        placeholder="Название"
        value={todoItem?.title} // todo value будет браться из form init
      />
      <TextAreaInput
        id={ItemFormFields.DESC}
        name={ItemFormFields.DESC}
        placeholder="Описание"
        value={todoItem?.description} // todo value будет браться из form init
      />
      {/* // TODO добавить дату исполнения */}
    </form>
  );
});
