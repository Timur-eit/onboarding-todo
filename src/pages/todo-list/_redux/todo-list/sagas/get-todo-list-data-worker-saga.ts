import { all, call, put } from 'redux-saga/effects';
import { getTodoList } from '@/api/requests/get-todo-list-all';
import { setErrorsAction, setLoadingsAction, setListAction } from '../actions';
import { ETodoLoadErrorState } from '../types';

export function* getTodoListDataWorkerSaga() {
  try {
    yield all([
      put(setErrorsAction({ [ETodoLoadErrorState.GET_ALL]: false })),
      put(setLoadingsAction({ [ETodoLoadErrorState.GET_ALL]: true })),
    ]);

    const { data, error, errorText } = yield call(getTodoList);

    if (error || data.error) {
      throw new Error(errorText ?? data.error);
    }

    yield put(setListAction(data));
  } catch (error) {
    yield put(setErrorsAction({ [ETodoLoadErrorState.GET_ALL]: true }));
  } finally {
    yield put(setLoadingsAction({ [ETodoLoadErrorState.GET_ALL]: false }));
  }
}
