import {
  CREATE_LIST_ITEM_PAGE_NAME,
  CREATE_LIST_ITEM_PAGE_PATH,
} from './_constants';

export default {
  name: CREATE_LIST_ITEM_PAGE_NAME,
  path: CREATE_LIST_ITEM_PAGE_PATH,
  loadAction: () => import('./index'),
  children: [],
};
