import {
  take, cancel, fork, call, put, select, cancelled, delay,
} from 'redux-saga/effects';
import ApiInit from '../api/v3/init';
import Events from '../events';
import { SET_AUTOUPDATE, Action } from '../actions';
import { setStatus } from '../slices/firstrun';


function* pollServerStatus() {
  while (true) {
    const resultJson = yield call(ApiInit.getStatus.bind(this));
    if (resultJson.error) {
      yield put({ type: Events.QUEUE_GLOBAL_ALERT, payload: { type: 'error', text: resultJson.message } });
    } else {
      yield put(setStatus(resultJson.data));
    }
    yield delay(100);
  }
}

function* pollAutoRefresh() {
  try {
    yield put({ type: SET_AUTOUPDATE, payload: true });
    while (true) {
      const location = yield select(state => state.router.location.pathname);

      if (location === '/mainpage') {
        yield put({ type: Events.MAINPAGE_QUEUE_STATUS, payload: null });
        yield put({ type: Events.MAINPAGE_RECENT_FILES, payload: null });
      }

      yield delay(4000);
    }
  } finally {
    if (yield cancelled()) {
      yield put({ type: SET_AUTOUPDATE, payload: false });
    }
  }
}

const typeMap = {
  'server-status': pollServerStatus,
  'auto-refresh': pollAutoRefresh,
};

export default function* apiPollingDriver(action: Action) {
  const {
    type,
  } = action.payload;

  if (typeof typeMap[type] !== 'function') {
    return;
  }

  // starts the task in the background
  const pollApiTask = yield fork(typeMap[type]);

  // wait for the user stop action
  while (true) {
    const stopAction = yield take(Events.STOP_API_POLLING);
    const stopType = stopAction.payload.type;
    if (stopType === type) { break; }
  }

  // user clicked stop. cancel the background task
  // this will throw a SagaCancellationException into the forked bgSync task
  yield cancel(pollApiTask);
}