import { ButtonLink, PanelDataContentType, Text } from '@wildberries/ui-kit';
import { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const COMPONENT_STYLE_NAME = 'ListItem';
const cn = classnames.bind(styles);

export const ListItemContent = memo(
  ({ data: { createDate, description } }: PanelDataContentType) => {
    return (
      <div className={cn(COMPONENT_STYLE_NAME)}>
        <Text color="orange" size="h3" text={createDate} />
        <div className={cn(`${COMPONENT_STYLE_NAME}__description`)}>
          <Text color="purple" size="h3" text={description} />
        </div>
        <ButtonLink
          // переход на страницу редактирования
          size="small"
          text="Редактировать"
          variant="adaptive"
        />
      </div>
    );
  },
);
