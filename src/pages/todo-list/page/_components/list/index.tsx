import { memo, useEffect, useState } from 'react';
import { Accordion, AccordionItemType, ButtonLink } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { AppLoader } from '@/_components/app-loader';
import { listBlockName } from '../../_constants';
import { useList } from './use-list';
import styles from './index.module.scss';
import { PanelContent } from './_components/panel-content';

// const BLOCK_NAME = 'List';
const cn = classnames.bind(styles);

export const List = memo(() => {
  const { isLoading, list } = useList();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (selected) {
      // TODO функционал удаления
      setTimeout(() => setSelected(''), 500);
    }
  }, [selected]);

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <div className={cn(`${listBlockName}`)}>
      <div className={cn(`${listBlockName}__control-panel`)}>
        {/* // TODO add функционал добавления нового записи */}
        <ButtonLink size="small" text="Добавить" variant="add" />
      </div>
      <Accordion
        hasRadioButton
        items={list as AccordionItemType[]}
        onSelect={({ name }) => setSelected(name)}
        panelContent={PanelContent}
        selectedValue={selected}
      />
    </div>
  );
});
