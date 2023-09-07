import { memo, useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  ButtonLink,
  CheckboxChangeEventType,
} from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { useList } from './use-list';
import styles from './index.module.scss';
import { ListItemContent } from './_components/list-item-content';

const BLOCK_NAME = 'List';
const cn = classnames.bind(styles);

export const List = memo(() => {
  const { list } = useList();
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
        items={list}
        onSelect={itemSelectHandler}
        panelContent={ListItemContent}
        selectedValue={selected}
      />
    </div>
  );
});
