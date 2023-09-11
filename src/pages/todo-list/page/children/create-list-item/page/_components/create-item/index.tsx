import { memo } from 'react';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';

// временная заглушка
export const CreateItem = memo(() => {
  return (
    <Text color="black" size="h2" text={i18next.t(i18nKeyMap.titles.create)} />
  );
});
