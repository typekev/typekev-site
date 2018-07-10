import {
  DEFAULT_ACTION,
  OPEN_NOTIF_ACTION,
  OPEN_DIALOG_ACTION,
  OPEN_MENU_ACTION,
  GET_PROFILE_DATA_REQUEST_ACTION,
  GET_PROFILE_DATA_RESPONSE_ACTION,
  TOGGLE_INDETERMINATE_PROGRESS_MOTION_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function openNotifAction(notifType, message) {
  return {
    type: OPEN_NOTIF_ACTION,
    notifType,
    message,
  };
}
export function openDialogAction(title, message) {
  return {
    type: OPEN_DIALOG_ACTION,
    title,
    message,
  };
}
export function openMenuAction() {
  return {
    type: OPEN_MENU_ACTION,
  };
}

export function getProfileDataRequestAction() {
  return {
    type: GET_PROFILE_DATA_REQUEST_ACTION,
  };
}

export function getProfileDataResponseAction(profileData) {
  return {
    type: GET_PROFILE_DATA_RESPONSE_ACTION,
    profileData,
  };
}

export function toggleIndeterminateProgressMotionAction(
  isIndeterminateLoadingMotionActive,
) {
  return {
    type: TOGGLE_INDETERMINATE_PROGRESS_MOTION_ACTION,
    isIndeterminateLoadingMotionActive,
  };
}
