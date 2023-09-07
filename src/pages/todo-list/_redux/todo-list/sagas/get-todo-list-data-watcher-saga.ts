import { takeLatest } from 'redux-saga/effects';
import { GET_TODO_LIST_DATA } from '../actions';
import { getTodoListDataWorkerSaga } from './get-todo-list-data-worker-saga';

export function* getTodoListDataWatcherSaga() {
  yield takeLatest(GET_TODO_LIST_DATA, getTodoListDataWorkerSaga);
}
