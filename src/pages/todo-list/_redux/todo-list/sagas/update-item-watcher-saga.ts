import { takeLatest } from 'redux-saga/effects';
import { UPDATE_ITEM } from '../actions';
import { updateItemWorkerSaga } from './update-item-worker-saga';

export function* updateItemWatcherSaga() {
  yield takeLatest(UPDATE_ITEM, updateItemWorkerSaga);
}
