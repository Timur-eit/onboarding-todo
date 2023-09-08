import { memo, useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  ButtonLink,
  CheckboxChangeEventType,
} from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { TListItem } from '@/pages/todo-list/_redux/todo-list/types';
import styles from './index.module.scss';
import { ListItemContent } from './_components/list-item-content';

const BLOCK_NAME = 'List';
const cn = classnames.bind(styles);

type TProps = {
  listData: TListItem[];
};

export const List = memo(({ listData }: TProps) => {
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
        items={listData}
        onSelect={itemSelectHandler}
        panelContent={ListItemContent}
        selectedValue={selected}
      />
    </div>
  );
});
