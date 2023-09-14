import { memo, useCallback } from 'react';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRoute } from 'react-router5';
import { Router } from 'router5';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormView } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form';
import { TItemFormValues } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form/types';
import { createItemAction } from '@/pages/todo-list/_redux/todo-list';
import { TODO_LIST_PAGE_NAME } from '@/pages/todo-list/page/_constants';

type TDispatch = {
  createNewItem: typeof createItemAction;
};

type TProps = { router: Router } & TDispatch;

const CreateItemWrapper = memo(({ router, createNewItem }: TProps) => {
  const handleCancel = useCallback(
    () => router.navigate(TODO_LIST_PAGE_NAME),
    [router],
  );

  const handleSubmit = useCallback(
    (values: TItemFormValues) => {
      createNewItem({ ...values, router });
    },
    [createNewItem, router],
  );

  return (
    <>
      <Text
        color="black"
        size="h2"
        text={i18next.t(i18nKeyMap.titles.create)}
      />
      <ItemFormView
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        isEdit={false}
      />
    </>
  );
});

const mapDispatchToProps = {
  createNewItem: createItemAction,
};

export const ConnectedCreateItem = compose(
  connect(null, mapDispatchToProps),
  withRoute,
)(CreateItemWrapper);
