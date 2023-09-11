import { memo, useCallback } from 'react';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormView } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form';
import { TItemFormValues } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form/types';
import { useTodoRoute } from '@/pages/todo-list/page/_components/list/_utils/hooks/use-todo-router';
import { createItemAction } from '@/pages/todo-list/_redux/todo-list';

type TDispatchMap = {
  createNewItem: typeof createItemAction;
};

type TProps = TDispatchMap;

export const CreateItemWrapper = memo(({ createNewItem }: TProps) => {
  const { goToListPage } = useTodoRoute();

  const submitCreate = useCallback(
    (values: TItemFormValues) => {
      createNewItem(values);
    },
    [createNewItem],
  );

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

const mapDispatchToProps = {
  createNewItem: createItemAction,
};

export const CreateItem = connect(null, mapDispatchToProps)(CreateItemWrapper);
