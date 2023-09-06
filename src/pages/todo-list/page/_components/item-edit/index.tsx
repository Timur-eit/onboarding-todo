import { memo } from 'react';
import { Text } from '@wildberries/ui-kit';
import { MainLayoutCard } from '../layout-container';
import { GoBackButton } from '../go-back-button';
import { AppLoader } from '../app-loader';
import { ItemForm } from '../item-form';
import { useItemEdit } from './use-item-edit';

// TODO локализация
// TODO классы cn.bind

export const ItemEdit = memo(() => {
  const { isLoading, itemCard } = useItemEdit();

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <MainLayoutCard>
      <Text color="black" size="h1" text="Редактирование задания" />
      <GoBackButton />
      <ItemForm todoItem={itemCard} />
    </MainLayoutCard>
  );
});
