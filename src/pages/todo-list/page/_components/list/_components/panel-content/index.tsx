import { ButtonLink, PanelDataContentType, Text } from '@wildberries/ui-kit';
import { memo } from 'react';
import classnames from 'classnames/bind';
import { listBlockName } from '@/pages/todo-list/page/_constants';
import styles from '../../index.module.scss';

const cn = classnames.bind(styles);

export const PanelContent = memo(({ data }: PanelDataContentType) => {
  return (
    <div className={cn(`${listBlockName}__item-content`)}>
      <Text color="orange" size="h3" text={data.createDate} />
      <div className={cn(`${listBlockName}__item-content__description`)}>
        <Text color="purple" size="h3" text={data.description} />
      </div>
      <ButtonLink
        // onClick={() => alert('delete')}
        size="small"
        text="Редактировать"
        variant="adaptive"
      />
    </div>
  );
});
