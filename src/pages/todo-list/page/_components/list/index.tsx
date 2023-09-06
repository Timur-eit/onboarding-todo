import { memo, useState } from 'react';
import { Accordion, AccordionItemType } from '@wildberries/ui-kit';
import { AppLoader } from '@/_components/app-loader';
import { useList } from './use-list';
import { PanelContent } from './helpers';

export const List = memo(() => {
  const { isLoading, list } = useList();

  // const ITEMS: Array<AccordionItemType> = [
  //   {
  //     id: '1',
  //     title: 'Задание 1',
  //     radioValue: 'first title',
  //     content: {
  //       title: 'first',
  //       description: 'description one',
  //       createDate: 'createDate 1',
  //     },
  //   },
  //   {
  //     id: '2',
  //     title: 'second title',
  //     radioValue: 'second title',
  //     content: {
  //       title: 'second',
  //       description: 'description two',
  //       createDate: 'createDate 2',
  //     },
  //   },
  //   {
  //     id: '3',
  //     title: 'third title',
  //     radioValue: 'third title',
  //     content: {
  //       title: 'third',
  //       description: 'description three',
  //       createDate: 'createDate 3',
  //     },
  //   },
  // ];

  // selectedValue?: string;
  /** коллбек изменения радио */
  // onSelect?: (selectedEvent: CheckboxChangeEventType) => void;

  const [selected, setSelected] = useState('');

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <div className="">
      <div className="">
        <Accordion
          hasRadioButton
          items={list as AccordionItemType[]}
          onSelect={({ name }) => setSelected(name)}
          panelContent={PanelContent}
          selectedValue={selected}
        />
      </div>
    </div>
  );
});
