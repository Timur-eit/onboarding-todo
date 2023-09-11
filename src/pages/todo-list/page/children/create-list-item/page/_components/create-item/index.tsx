import { memo, useCallback, useEffect } from 'react';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormView } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form';
import { TItemFormValues } from '@/pages/todo-list/page/_components/list/_components/_view-components/item-form/types';
import { useTodoRoute } from '@/pages/todo-list/page/_components/list/_utils/hooks/use-todo-router';
import {
  createItemAction,
  getCompleteStatuses,
} from '@/pages/todo-list/_redux/todo-list';

type TSateMap = {
  completeState: ReturnType<typeof getCompleteStatuses>;
};

type TDispatchMap = {
  createNewItem: typeof createItemAction;
};

type TProps = TSateMap & TDispatchMap;

export const CreateItemWrapper = memo(
  ({ completeState, createNewItem }: TProps) => {
    const { isCreated } = completeState;
    const { goToListPage } = useTodoRoute();

    const submitCreate = useCallback(
      (values: TItemFormValues) => {
        createNewItem(values);
      },
      [createNewItem],
    );

    useEffect(() => {
      if (isCreated) {
        goToListPage();
      }
    }, [goToListPage, isCreated]);

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
  },
);

const mapStateToProps = (state) => ({
  completeState: getCompleteStatuses(state),
});

const mapDispatchToProps = {
  createNewItem: createItemAction,
};

export const CreateItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateItemWrapper);
