import { all, call, put } from 'redux-saga/effects';
import { updateTodoItem } from '@/api/requests/update-todo-etem';
import {
  setCompleteAction,
  setErrorsAction,
  setLoadingsAction,
} from '../actions';
import { ETodoErrors, ETodoLoadings, TUpdateItemActionSaga } from '../types';

export function* updateItemWorkerSaga({ payload }: TUpdateItemActionSaga) {
  try {
    yield all([
      put(setErrorsAction({ [ETodoErrors.UPDATE_ITEM]: false })),
      put(setLoadingsAction({ [ETodoLoadings.UPDATE_ITEM]: true })),
    ]);

    const { error, errorText, additionalErrors } = yield call(
      updateTodoItem,
      payload,
    );

    if (error || errorText || additionalErrors) {
      throw new Error(errorText ?? additionalErrors);
    }
    yield put(setCompleteAction({ isEdited: true }));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.UPDATE_ITEM]: true }));
  } finally {
    yield all([
      put(setLoadingsAction({ [ETodoLoadings.UPDATE_ITEM]: false })),
      put(setCompleteAction({ isEdited: false })),
    ]);
  }
}
