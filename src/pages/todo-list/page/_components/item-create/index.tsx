import { memo } from 'react';
import { Text } from '@wildberries/ui-kit';
import { MainLayoutCard } from '../layout-container';
import { GoBackButton } from '../go-back-button';
import { ItemForm } from '../item-form';

// TODO локализация
// TODO классы cn.bind

export const ItemCreate = memo(() => {
  return (
    <MainLayoutCard>
      <Text color="black" size="h1" text="Создание нового задания" />
      <GoBackButton />
      <ItemForm />
    </MainLayoutCard>
  );
});
