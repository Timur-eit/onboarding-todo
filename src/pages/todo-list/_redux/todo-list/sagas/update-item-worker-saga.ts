import { all, call, put, select } from 'redux-saga/effects';
import { updateTodoItem } from '@/api/requests/update-todo-etem';
import {
  setCompleteAction,
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from '../actions';
import {
  ETodoErrors,
  ETodoLoadings,
  TListItem,
  TUpdateItemActionSaga,
} from '../types';
import { getListData } from '../selectors';

export function* updateItemWorkerSaga({ payload }: TUpdateItemActionSaga) {
  try {
    yield all([
      put(setErrorsAction({ [ETodoErrors.UPDATE_ITEM]: false })),
      put(setLoadingsAction({ [ETodoLoadings.UPDATE_ITEM]: true })),
    ]);

    const { data, error, errorText, additionalErrors } = yield call(
      updateTodoItem,
      payload,
    );

    if (error || errorText || additionalErrors) {
      throw new Error(errorText ?? additionalErrors);
    }
    yield put(setCompleteAction({ isEdited: true }));

    const list: TListItem[] = yield select(getListData);
    const updatedItemIndex = list.findIndex(({ id }) => id === data.id);
    const updatedList = [...list];
    updatedList[updatedItemIndex] = data;

    yield put(setListAction(updatedList));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.UPDATE_ITEM]: true }));
  } finally {
    yield all([
      put(setLoadingsAction({ [ETodoLoadings.UPDATE_ITEM]: false })),
      put(setCompleteAction({ isEdited: false })),
    ]);
  }
}
