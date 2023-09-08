import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { Ti18NextTodoModel } from './i-18-next-model';

export const todoLocalizationMap: Ti18NextTodoModel = {
  list: {
    listTitle: `${APP_NAMESPACE}:todo.list.listTitle`,
    addButton: `${APP_NAMESPACE}:todo.list.addButton`,
  },
};

// title: i18next.t(TODO_PAGE_TRANSLATES.deleteButton),

// text={i18next.t(`${APP_NAMESPACE}:todo.list.listTitle`)}
