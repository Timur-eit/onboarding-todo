import React, { memo } from 'react';
import { Text, ButtonLink } from '@wildberries/ui-kit';

// TODO стили и компоненты из ui-kit

type PropsType = {
  title: string;
  createDate: string;
};

export const ListItem = memo(({ title, createDate }: PropsType) => {
  const deleteHandler = () => null;

  return (
    <div className="">
      <Text color="black" size="h0" text={title} />
      <Text color="black" size="h0" text={createDate} />
      {/* // TODO дату на какое число сделать */}
      <ButtonLink onClick={deleteHandler} text="Удалить" variant="remove" />
    </div>
  );
});
