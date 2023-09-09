import { ButtonLink, PanelDataContentType } from '@wildberries/ui-kit';
import { memo } from 'react';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemField } from '../_view-components/item-field';
import styles from './index.module.scss';

const COMPONENT_STYLE_NAME = 'ListItem';
const cn = classnames.bind(styles);

export const ListItemContent = memo(
  ({ data: { createDate, description } }: PanelDataContentType) => (
    <div className={cn(COMPONENT_STYLE_NAME)}>
      <ItemField
        label={i18next.t(i18nKeyMap.fieldLabels.createDate)}
        text={createDate}
        textColor="orange"
      />
      <ItemField
        label={i18next.t(i18nKeyMap.fieldLabels.description)}
        text={description}
        textClassName={cn(`${COMPONENT_STYLE_NAME}__description`)}
        textColor="purple"
      />
      <ButtonLink
        // переход на страницу редактирования
        size="small"
        text={i18next.t(i18nKeyMap.buttonLabels.edit)}
        variant="adaptive"
      />
    </div>
  ),
);
