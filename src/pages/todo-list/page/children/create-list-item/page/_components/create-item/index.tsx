import { memo, useCallback } from 'react';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormView } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form';
import { TItemFormValues } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form/types';
import { useTodoRoute } from '@/pages/todo-list/page/_components/list/_utils/hooks/use-todo-router';

export const CreateItem = memo(() => {
  const { goToListPage } = useTodoRoute();

  const submitCreate = useCallback((values: TItemFormValues) => {
    // eslint-disable-next-line no-console
    console.log(values); // временная заглушка
  }, []);

  return (
    <>
      <Text
        color="black"
        size="h2"
        text={i18next.t(i18nKeyMap.titles.create)}
      />
      <ItemFormView
        cancelHandler={goToListPage}
        isEdit={false}
        submitHandler={submitCreate}
      />
    </>
  );
});
