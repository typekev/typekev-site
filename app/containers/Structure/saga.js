import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { getProfileData } from 'api/profileDataApi';

import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_PROFILE_DATA_REQUEST_ACTION } from './constants';
import {
  getProfileDataResponseAction,
  toggleIndeterminateProgressMotionAction,
} from './actions';

export function* getProfileDataSaga(action) {
  try {
    const profileData = yield call(getProfileData);
    yield put(getProfileDataResponseAction(profileData));
  } catch (err) {
    const profileData = yield {
      content: {
        rendered: `<div class="initial-letter"><p>As a full stack software engineer, I specialize in React and Blockchain technologies. In addition, I am versed in user experience design, object oriented programming with Java and C#, database development with both SQL and NoSQL, functional programming with ReasonML, Elm, and F# (Fable), and native development with React Native.</p> <p>I have a passion for life, technology, and learning.</p> </div>`,
      },
    };
    yield put(getProfileDataResponseAction(profileData));
  }
}

export function* toggleIndeterminateProgressMotionSaga(action) {
  try {
    const { pathname } = action.payload;
    if (pathname && pathname.includes('#')) {
      throw 'Accessing hash url';
    }

    if (action.payload.state.from) {
      const { from } = action.payload.state;
      const nextPath = pathname === '/' ? '/about' : pathname;
      const previousPath = from === '/' ? '/about' : from;
      if (nextPath.includes(previousPath) || previousPath.includes(nextPath)) {
        throw `action.payload.state.from matches current pathname ${
          action.payload.pathname
        }`;
      }
    }
    yield put(toggleIndeterminateProgressMotionAction(true));
    yield call(delay, 1000);
    yield put(toggleIndeterminateProgressMotionAction(false));
  } catch (err) {
    yield put(toggleIndeterminateProgressMotionAction(false));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeLatest(GET_PROFILE_DATA_REQUEST_ACTION, getProfileDataSaga),
    takeLatest(LOCATION_CHANGE, toggleIndeterminateProgressMotionSaga),
  ];
}
