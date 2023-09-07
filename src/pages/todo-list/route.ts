import createNewListItem from './page/children/create-list-item/route';

export default {
  name: 'todo',
  path: '/todo',
  loadAction: () => import('./index'),
  children: [createNewListItem],
  // uncomment if you need translations
  // i18n: {
  //   namespaces: [appNamespace],
  // },
};
