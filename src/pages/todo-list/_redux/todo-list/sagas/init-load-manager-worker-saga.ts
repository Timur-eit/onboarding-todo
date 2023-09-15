import { put } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { TInitLoadManagerActionSaga } from '../types';

export function* initLoadManagerWorkerSaga({
  payload,
}: TInitLoadManagerActionSaga) {
  yield put(initLoadManagerActionSaga(payload));
}
