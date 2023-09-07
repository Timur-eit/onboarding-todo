import { all, call, put } from 'redux-saga/effects';
import { getTodoList } from '@/api/requests/get-todo-list-all';
import {
  setIsErrorListAction,
  setIsLoadingListAction,
  setTodoListDataAction,
} from '../actions';
import { normalizeListData } from '../_utils/normalize-list-data';

export function* getTodoListDataWorkerSaga() {
  try {
    yield all([
      put(setIsErrorListAction(false)),
      put(setIsLoadingListAction(true)),
    ]);

    const { data, error, errorText } = yield call(getTodoList);

    if (error || data.error) {
      throw new Error(errorText ?? data.error);
    }

    const normalizedData = normalizeListData(data);
    yield put(setTodoListDataAction(normalizedData));
  } catch (error) {
    yield put(setIsErrorListAction(true));
  } finally {
    yield put(setIsLoadingListAction(false));
  }
}
