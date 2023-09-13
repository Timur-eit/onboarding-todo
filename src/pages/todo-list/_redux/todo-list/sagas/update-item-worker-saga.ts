import { all, call, put, select } from 'redux-saga/effects';
import { updateTodoItem } from '@/api/requests/update-todo-etem';
import {
  setErrorsAction,
  setListAction,
  setLoadingsAction,
  setEditModalOpenAction,
  setEditIItemIdAction,
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

    const { data, error, errorText } = yield call(updateTodoItem, payload);

    if (error) {
      throw new Error(errorText || 'update item network error');
    }

    const list: TListItem[] = yield select(getListData);
    const updatedItemIndex = list.findIndex(({ id }) => id === data.id);
    const updatedList = [...list];
    updatedList[updatedItemIndex] = data;
    yield put(setListAction(updatedList));

    yield all([
      put(setEditModalOpenAction(false)),
      put(setEditIItemIdAction(null)),
    ]);
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.UPDATE_ITEM]: true }));
  } finally {
    yield put(setLoadingsAction({ [ETodoLoadings.UPDATE_ITEM]: false }));
  }
}
