import { takeLatest } from 'redux-saga/effects';
import { DELETE_ITEM } from '../actions';
import { deleteItemWorkerSaga } from './delete-item-worker-saga';

export function* deleteItemWatcherSaga() {
  yield takeLatest(DELETE_ITEM, deleteItemWorkerSaga);
}
