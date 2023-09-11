import { memo, useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  ButtonLink,
  CheckboxChangeEventType,
} from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { TListItem } from '@/pages/todo-list/_redux/todo-list/types';
import { getListData } from '@/pages/todo-list/_redux/todo-list';
import { todoLocalizationMap as i18nMap } from '../../_localization/localization-map';
import { ListItemContent } from './_components/list-item-content';
import { convertForAccordion } from './_utils/convert-data-for-accordion';
import styles from './index.module.scss';
import { useTodoRoute } from './_utils/hooks/use-todo-router';

const BLOCK_NAME = 'List';
const cn = classnames.bind(styles);

type TProps = {
  listData: TListItem[];
};

export const ListWrapper = memo(({ listData }: TProps) => {
  const { goToCreatePage } = useTodoRoute();
  const [selected, setSelected] = useState('');

  const itemSelectHandler = useCallback(
    ({ name }: CheckboxChangeEventType) => setSelected(name),
    [],
  );

  useEffect(() => {
    if (selected) {
      // TODO функционал удаления
      setTimeout(() => setSelected(''), 500);
    }
  }, [selected]);

  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__control-panel`)}>
        <ButtonLink
          onClick={goToCreatePage}
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
});

const mapStateToProps = (state) => ({
  listData: getListData(state),
});

export const List = connect(mapStateToProps)(ListWrapper);
