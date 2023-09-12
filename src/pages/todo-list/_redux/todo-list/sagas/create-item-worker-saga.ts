import { all, call, put } from 'redux-saga/effects';
import { createTodoItem } from '@/api/requests/create-todo-etem';
import {
  setCompleteAction,
  setErrorsAction,
  setLoadingsAction,
} from '../actions';
import { ETodoErrors, ETodoLoadings, TCreateItemActionSaga } from '../types';

export function* createItemWorkerSaga({ payload }: TCreateItemActionSaga) {
  try {
    yield all([
      put(setErrorsAction({ [ETodoErrors.ADD_ITEM]: false })),
      put(setLoadingsAction({ [ETodoLoadings.ADD_ITEM]: true })),
    ]);

    const { data, error, errorText } = yield call(createTodoItem, payload);

    if (error || data.error) {
      throw new Error(errorText ?? data.error);
    }
    yield put(setCompleteAction({ isCreated: true }));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.ADD_ITEM]: true }));
  } finally {
    yield all([
      put(setLoadingsAction({ [ETodoLoadings.ADD_ITEM]: false })),
      put(setCompleteAction({ isCreated: false })),
    ]);
  }
}