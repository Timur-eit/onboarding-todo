import { CREATE_ITEM_PAGE_NAME, CREATE_ITEM_PAGE_PATH } from './_constants';

export default {
  name: CREATE_ITEM_PAGE_NAME,
  path: CREATE_ITEM_PAGE_PATH,
  loadAction: () => import('./index'),
  children: [],
};
