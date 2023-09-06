import React, { memo } from 'react';
import classnames from 'classnames/bind';
import {
  Text,
  ButtonLink,
  Accordion,
  PanelDataContentType,
  AccordionItemType,
} from '@wildberries/ui-kit';
import styles from './index.module.scss';

// TODO стили и компоненты из ui-kit

type PropsType = {
  title: string;
  createDate: string;
};

const PanelContent = ({ data }: PanelDataContentType) => (
  <>
    <Text color="orange" size="h3" text={data.title} />
    <br />
    <Text color="purple" size="h3" text={data.description} />
  </>
);

const BLOCK_NAME = 'ListItem';
const cn = classnames.bind(styles);

export const ListItem = memo(({ title, createDate }: PropsType) => {
  const ITEMS: Array<AccordionItemType> = [
    {
      id: '1',
      title: 'first title',
      radioValue: 'first title',
      content: {
        title: 'first',
        description: 'description one',
      },
    },
    {
      id: '2',
      title: 'second title',
      radioValue: 'second title',
      content: {
        title: 'second',
        description: 'description two',
      },
    },
    {
      id: '3',
      title: 'third title',
      radioValue: 'third title',
      content: {
        title: 'third',
        description: 'description three',
      },
    },
  ];

  const deleteHandler = () => null;

  return (
    <div className={cn(`${BLOCK_NAME}`)}>
      <Text color="black" size="h0" text={title} />
      <Text color="black" size="h0" text={createDate} />
      {/* // TODO дату на какое число сделать */}
      <ButtonLink onClick={deleteHandler} text="Удалить" variant="remove" />
      <Accordion items={ITEMS} panelContent={PanelContent} />;
    </div>
  );
});
