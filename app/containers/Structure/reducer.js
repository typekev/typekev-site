import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  OPEN_NOTIF_ACTION,
  OPEN_DIALOG_ACTION,
  OPEN_MENU_ACTION,
  GET_PROFILE_DATA_RESPONSE_ACTION,
  TOGGLE_INDETERMINATE_PROGRESS_MOTION_ACTION,
} from './constants';

export const initialState = fromJS({
  isIndeterminateLoadingMotionActive: false,
  isDialogOpen: false,
  isNotifOpen: false,
  notifType: false,
  notifMessage: '',
  dialogTitle: '',
  dialogMessage: '',
  isMenuOpen: false,
  profileData: {
    content: {
      rendered: '',
    },
  },
});

function structureReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case OPEN_NOTIF_ACTION:
      return state
        .set('isNotifOpen', !state.get('isNotifOpen'))
        .set('notifType', action.notifType || state.get('notifType'))
        .set('notifMessage', action.message || state.get('notifMessage'));
    case OPEN_DIALOG_ACTION:
      return state
        .set('isDialogOpen', !state.get('isDialogOpen'))
        .set('dialogTitle', action.title || initialState.get('dialogTitle'))
        .set(
          'dialogMessage',
          action.message || initialState.get('dialogMessage'),
        );
    case OPEN_MENU_ACTION:
      return state.set('isMenuOpen', !state.get('isMenuOpen'));
    case GET_PROFILE_DATA_RESPONSE_ACTION:
      return state.set('profileData', fromJS(action.profileData));
    case TOGGLE_INDETERMINATE_PROGRESS_MOTION_ACTION:
      return state.set(
        'isIndeterminateLoadingMotionActive',
        action.isIndeterminateLoadingMotionActive,
      );
    default:
      return state;
  }
}

export default structureReducer;
