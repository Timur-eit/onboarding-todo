import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { I18N_DICTIONARY } from '@/_assets/i18next';
import { TODO_LIST_PAGE_NAME, TODO_LIST_PAGE_PATH } from './page/_constants';
import createNewListItem from './page/children/create-list-item/route';
import editListItem from './page/children/edit-list-item/route';

export default {
  name: TODO_LIST_PAGE_NAME,
  path: TODO_LIST_PAGE_PATH,
  loadAction: () => import('./index'),
  children: [createNewListItem, editListItem],
  i18n: {
    namespaces: [APP_NAMESPACE],
    localDictionaryFiles: I18N_DICTIONARY,
  },
};
