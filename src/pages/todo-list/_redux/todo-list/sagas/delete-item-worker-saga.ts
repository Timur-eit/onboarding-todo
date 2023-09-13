import { all, call, put, select } from 'redux-saga/effects';
import { deleteTodoItem } from '@/api/requests/delete-todo-etem';
import { setErrorsAction, setListAction, setLoadingsAction } from '../actions';
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

    const { error, errorText } = yield call(deleteTodoItem, payload);

    if (error) {
      throw new Error(errorText || 'delete item network error');
    }

    const list: TListItem[] = yield select(getListData);
    const updatedList = list.filter(({ id }) => id !== payload.id);

    yield put(setListAction(updatedList));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.DELETE_ITEM]: true }));
  } finally {
    yield put(setLoadingsAction({ [ETodoLoadings.DELETE_ITEM]: false }));
  }
}
