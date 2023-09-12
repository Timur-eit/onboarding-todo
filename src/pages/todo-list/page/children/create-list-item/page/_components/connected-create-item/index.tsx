import { memo, useCallback, useEffect } from 'react';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRoute } from 'react-router5';
import { Router } from 'router5';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormView } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form';
import { TItemFormValues } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form/types';
import {
  createItemAction,
  getCompleteStatuses,
} from '@/pages/todo-list/_redux/todo-list';
import { TODO_LIST_PAGE_NAME } from '@/pages/todo-list/page/_constants';

type TStateMap = {
  completeState: ReturnType<typeof getCompleteStatuses>;
};

type TDispatchMap = {
  createNewItem: typeof createItemAction;
};

type TProps = { router: Router } & TStateMap & TDispatchMap;

export const CreateItemWrapper = memo(
  ({ router, completeState, createNewItem }: TProps) => {
    const { isCreated } = completeState;

    const cancelHandler = useCallback(
      () => router.navigate(TODO_LIST_PAGE_NAME),
      [router],
    );

    const submitCreate = useCallback(
      (values: TItemFormValues) => {
        createNewItem(values);
      },
      [createNewItem],
    );

    useEffect(() => {
      if (isCreated) {
        cancelHandler();
      }
    }, [cancelHandler, isCreated]);

    return (
      <>
        <Text
          color="black"
          size="h2"
          text={i18next.t(i18nKeyMap.titles.create)}
        />
        <ItemFormView
          handleCancel={cancelHandler}
          handleSubmit={submitCreate}
          isEdit={false}
        />
      </>
    );
  },
);

const mapStateToProps = (state) => ({
  completeState: getCompleteStatuses(state),
});

const mapDispatchToProps = {
  createNewItem: createItemAction,
};

export const ConnectedCreateItem = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRoute,
)(CreateItemWrapper);
