import { takeLatest } from 'redux-saga/effects';
import { CREATE_ITEM } from '../actions';
import { createItemWorkerSaga } from './create-item-worker-saga';

export function* createItemWatcherSaga() {
  yield takeLatest(CREATE_ITEM, createItemWorkerSaga);
}
