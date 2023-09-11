import { useRouter } from 'react-router5';
import { useCallback } from 'react';
import { CREATE_ITEM_PAGE_PAGE_NODE } from '@/pages/todo-list/page/children/create-list-item/_constants';
import { TODO_LIST_PAGE_NAME } from '@/pages/todo-list/page/_constants';

export const useTodoRoute = () => {
  const { navigate } = useRouter();

  const goToListPage = useCallback(
    () => navigate(TODO_LIST_PAGE_NAME),
    [navigate],
  );

  const goToCreatePage = useCallback(
    () => navigate(CREATE_ITEM_PAGE_PAGE_NODE),
    [navigate],
  );

  return { goToCreatePage, goToListPage };
};
