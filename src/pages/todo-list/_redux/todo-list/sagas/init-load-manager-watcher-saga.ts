import { takeLatest } from 'redux-saga/effects';
import { INIT_LOAD_MANAGER } from '../actions';
import { initLoadManagerWorkerSaga } from './init-load-manager-worker-saga';

export function* initLoadManagerWatcherSaga() {
  yield takeLatest(INIT_LOAD_MANAGER, initLoadManagerWorkerSaga);
}
