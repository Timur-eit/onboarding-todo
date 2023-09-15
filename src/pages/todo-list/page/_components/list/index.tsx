import { memo, useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  ButtonLink,
  CheckboxChangeEventType,
} from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { compose } from 'redux';
import { withRouter } from 'react-router5';
import { Router } from 'router5';
import {
  ETodoErrors,
  ETodoLoadings,
  TListItem,
} from '@/pages/todo-list/_redux/todo-list/types';
import {
  getListData,
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from '@/pages/todo-list/_redux/todo-list';
import { deleteTodoItem } from '@/api/requests/delete-todo-etem';
import { todoLocalizationMap as i18nMap } from '../../_localization/localization-map';
import { CREATE_ITEM_PAGE_PAGE_NODE } from '../../children/create-list-item/_constants';
import { ListItemContent } from './_components/list-item-content';
import { convertForAccordion } from './_utils/convert-data-for-accordion';
import { setActualListToStore } from './_utils/set-actual-list-to-store';
import styles from './index.module.scss';

const DELETE_ITEM_DELAY = 100;

const BLOCK_NAME = 'List';
const cn = classnames.bind(styles);

type TState = {
  listData: TListItem[];
};

type TDispatch = {
  setList: typeof setListAction;
  setErrors: typeof setErrorsAction;
  setLoadings: typeof setLoadingsAction;
};

type TProps = {
  router: Router;
} & TState &
  TDispatch;

const ListWrapper = memo(
  ({ listData, router, setList, setErrors, setLoadings }: TProps) => {
    const [selected, setSelected] = useState('');

    const createHandler = useCallback(
      () => router.navigate(CREATE_ITEM_PAGE_PAGE_NODE),
      [router],
    );

    const itemSelectHandler = useCallback(
      ({ name }: CheckboxChangeEventType) => setSelected(name),
      [],
    );

    const handleDelete = useCallback(
      async (id: string) => {
        setErrors({ [ETodoErrors.DELETE_ITEM]: false });
        setLoadings({ [ETodoLoadings.DELETE_ITEM]: true });
        try {
          const { error, errorText } = await deleteTodoItem({ id });
          if (error) {
            throw new Error(errorText || 'delete item network error');
          }

          setActualListToStore({ setList, setErrors, setLoadings });
        } catch (error) {
          setErrors({ [ETodoErrors.DELETE_ITEM]: true });
        } finally {
          setLoadings({ [ETodoLoadings.DELETE_ITEM]: false });
        }
      },
      [setErrors, setList, setLoadings],
    );

    useEffect(() => {
      if (selected) {
        setTimeout(() => handleDelete(selected), DELETE_ITEM_DELAY);
      }
    }, [handleDelete, selected]);

    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__control-panel`)}>
          <ButtonLink
            onClick={createHandler}
            size="small"
            text={i18next.t(i18nMap.buttonLabels.create)}
            variant="add"
          />
        </div>
        <Accordion
          hasRadioButton
          items={convertForAccordion(listData)}
          onSelect={itemSelectHandler}
          panelContent={ListItemContent}
          selectedValue={selected}
        />
      </div>
    );
  },
);

const mapStateToProps = (state) => ({
  listData: getListData(state),
});

const mapDispatchToProps = {
  setErrors: setErrorsAction,
  setLoadings: setLoadingsAction,
  setList: setListAction,
};

export const ConnectedList = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ListWrapper);
