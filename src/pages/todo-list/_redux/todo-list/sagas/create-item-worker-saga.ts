import { all, call, put } from 'redux-saga/effects';
import { createTodoItem } from '@/api/requests/create-todo-etem';
import { TODO_LIST_PAGE_NAME } from '@/pages/todo-list/page/_constants';
import { setErrorsAction, setLoadingsAction } from '../actions';
import { ETodoErrors, ETodoLoadings, TCreateItemActionSaga } from '../types';

export function* createItemWorkerSaga({ payload }: TCreateItemActionSaga) {
  try {
    yield all([
      put(setErrorsAction({ [ETodoErrors.ADD_ITEM]: false })),
      put(setLoadingsAction({ [ETodoLoadings.ADD_ITEM]: true })),
    ]);

    const { title, description, router } = payload;

    const { error, errorText } = yield call(createTodoItem, {
      title,
      description,
    });

    if (error) {
      throw new Error(errorText || 'create item network error');
    }
    yield call(() => router.navigate(TODO_LIST_PAGE_NAME));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.ADD_ITEM]: true }));
  } finally {
    yield put(setLoadingsAction({ [ETodoLoadings.ADD_ITEM]: false }));
  }
}
