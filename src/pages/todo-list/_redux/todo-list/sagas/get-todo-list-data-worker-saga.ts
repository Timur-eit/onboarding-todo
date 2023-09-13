import { all, call, put } from 'redux-saga/effects';
import { getTodoList } from '@/api/requests/get-todo-list-all';
import { setErrorsAction, setLoadingsAction, setListAction } from '../actions';
import { ETodoErrors, ETodoLoadings } from '../types';

export function* getTodoListDataWorkerSaga() {
  try {
    yield all([
      put(setErrorsAction({ [ETodoErrors.GET_ALL]: false })),
      put(setLoadingsAction({ [ETodoLoadings.GET_ALL]: true })),
    ]);

    const { data, error, errorText } = yield call(getTodoList);

    if (error) {
      throw new Error(errorText || 'get list network error');
    }
    yield put(setListAction(data));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoErrors.GET_ALL]: true }));
  } finally {
    yield put(setLoadingsAction({ [ETodoLoadings.GET_ALL]: false }));
  }
}
