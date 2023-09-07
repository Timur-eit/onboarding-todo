import { TODO_LIST_PAGE_NAME, TODO_LIST_PAGE_PATH } from './page/_constants';
import createNewListItem from './page/children/create-list-item/route';

export default {
  name: TODO_LIST_PAGE_NAME,
  path: TODO_LIST_PAGE_PATH,
  loadAction: () => import('./index'),
  children: [createNewListItem],
  // uncomment if you need translations
  // i18n: {
  //   namespaces: [appNamespace],
  // },
};
