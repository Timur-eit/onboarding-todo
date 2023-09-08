import { memo, useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  ButtonLink,
  CheckboxChangeEventType,
} from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import { TListItem } from '@/pages/todo-list/_redux/todo-list/types';
import { getListData } from '@/pages/todo-list/_redux/todo-list';
import styles from './index.module.scss';
import { ListItemContent } from './_components/list-item-content';
import { convertForAccordion } from './_utils/convert-data-for-accordion';

const BLOCK_NAME = 'List';
const cn = classnames.bind(styles);

type TProps = {
  listData: TListItem[];
};

export const ListWrapper = memo(({ listData }: TProps) => {
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
        {/* // TODO add функционал добавления нового записи */}
        <ButtonLink size="small" text="Добавить" variant="add" />
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
