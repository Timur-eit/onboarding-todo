import { memo } from 'react';
import { Text, Label, ButtonLink } from '@wildberries/ui-kit';
import { ListItemType } from '../../types';
import { MainLayoutCard } from '../layout-container';

// TODO локализация
// TODO классы cn.bind

type PropsType = {
  listItem: ListItemType;
};

export const ItemCard = memo(({ listItem }: PropsType) => {
  const { title, createDate } = listItem;

  const editHandler = () => null;
  const deleteHandler = () => null;

  return (
    <MainLayoutCard>
      <div className="field">
        <Text color="black" size="h1" text={title} />
      </div>
      <div>
        <Label htmlFor="id1">Дата создание</Label>
        <Text color="black" size="h3" text={createDate} />
      </div>
      <div className="field">
        <Label htmlFor="id1">Дата выполнения</Label>
        {/* // TODO добавить в модель дату выполнения */}
        <Text color="black" size="h3" text="Дата" />
      </div>
      <div className="field">
        <Label htmlFor="id1">Описание</Label>
        <Text color="black" size="h3" text="Дата" />
      </div>
      <div className="buttons">
        <ButtonLink onClick={editHandler} text="add" variant="add" />
        <ButtonLink onClick={deleteHandler} text="remove" variant="remove" />
      </div>
    </MainLayoutCard>
  );
});
