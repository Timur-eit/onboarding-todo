import { ButtonLink, PanelDataContentType } from '@wildberries/ui-kit';
import { memo } from 'react';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFieldView } from '../_view-components/item-field';
import { getLocalTime } from '../../_utils/get-local-time';
import { useTodoRoute } from '../../_utils/hooks/use-todo-router';
import styles from './index.module.scss';

const COMPONENT_STYLE_NAME = 'ListItem';
const cn = classnames.bind(styles);

export const ListItemContent = memo(
  ({ data: { id, createDate, description } }: PanelDataContentType) => {
    const { goToEditPage } = useTodoRoute();

    return (
      <div className={cn(COMPONENT_STYLE_NAME)}>
        <ItemFieldView
          label={i18next.t(i18nKeyMap.fieldLabels.createDate)}
          text={getLocalTime(createDate)}
          textColor="orange"
        />
        <ItemFieldView
          label={i18next.t(i18nKeyMap.fieldLabels.description)}
          text={description}
          textClassName={cn(`${COMPONENT_STYLE_NAME}__description`)}
          textColor="purple"
        />
        <ButtonLink
          onClick={() => goToEditPage(id)}
          size="small"
          text={i18next.t(i18nKeyMap.buttonLabels.edit)}
          variant="adaptive"
        />
      </div>
    );
  },
);
