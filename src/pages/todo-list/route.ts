import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { TODO_LIST_PAGE_NAME, TODO_LIST_PAGE_PATH } from './page/_constants';
import createNewListItem from './page/children/create-list-item/route';

export default {
  name: TODO_LIST_PAGE_NAME,
  path: TODO_LIST_PAGE_PATH,
  loadAction: () => import('./index'),
  children: [createNewListItem],
  i18n: {
    namespaces: [APP_NAMESPACE],
  },
};
