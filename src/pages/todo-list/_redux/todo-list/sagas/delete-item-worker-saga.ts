import { all, call, put, select } from 'redux-saga/effects';
import { deleteTodoItem } from '@/api/requests/delete-todo-etem';
import {
  setCompleteAction,
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from '../actions';
import {
  ETodoErrors,
  ETodoLoadings,
  TDeleteItemActionSaga,
  TListItem,
} from '../types';
import { getListData } from '../selectors';

export function* deleteItemWorkerSaga({ payload }: TDeleteItemActionSaga) {
  try {
    yield all([
      put(setErrorsAction({ [ETodoErrors.DELETE_ITEM]: false })),
      put(setLoadingsAction({ [ETodoLoadings.DELETE_ITEM]: true })),
    ]);

    const { error, errorText, additionalErrors } = yield call(
      deleteTodoItem,
      payload,
    );

    if (error || errorText || additionalErrors) {
      throw new Error(errorText ?? additionalErrors);
    }
    yield put(setCompleteAction({ isDeleted: true }));

    const list: TListItem[] = yield select(getListData);
    const updatedList = list.filter(({ id }) => id !== payload.id);

    yield put(setListAction(updatedList));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.DELETE_ITEM]: true }));
  } finally {
    yield all([
      put(setLoadingsAction({ [ETodoLoadings.DELETE_ITEM]: false })),
      put(setCompleteAction({ isDeleted: false })),
    ]);
  }
}
