import { EDIT_ITEM_PAGE_NAME, EDIT_ITEM_PAGE_PATH } from './_constants';

export default {
  name: EDIT_ITEM_PAGE_NAME,
  path: EDIT_ITEM_PAGE_PATH,
  loadAction: () => import('./index'),
  children: [],
};
