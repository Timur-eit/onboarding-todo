import { CREATE_NEW_ITEM_MODULE } from './_constants';

export default {
  name: CREATE_NEW_ITEM_MODULE,
  path: `/${CREATE_NEW_ITEM_MODULE}`,
  loadAction: () => import('./page/index'),
  // uncomment if you need translations
  // i18n: {
  //   namespaces: [appNamespace],
  // },
};
