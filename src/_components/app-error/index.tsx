import { ErrorMessage, Text } from '@wildberries/ui-kit';
import { memo } from 'react';

export const AppError = memo(() => (
  <ErrorMessage
    iconHidden={false}
    iconHiddenOnMobile={false}
    iconSize="XL"
    isListItem={false}
    title="Ошибка получения данных"
    titleSize="h1"
    type="error"
  >
    <Text text="Ошибка получения данных, попробуйте позже." />
  </ErrorMessage>
));
