// eslint-disable-next-line import/no-unused-modules
export default {
  name: 'home',
  path: '/home',
  loadAction: () => import('./index'),
  // uncomment if you need translations
  // i18n: {
  //   namespaces: [appNamespace],
  // },
};
