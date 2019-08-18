import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStructureDomain = state => state.get('structure', initialState);

const selectIsDialogOpen = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get('isDialogOpen'),
  );
const selectIsNotifOpen = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get('isNotifOpen'),
  );
const selectNotifType = () =>
  createSelector(selectStructureDomain, substate => substate.get('notifType'));
const selectNotifMessage = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get('notifMessage'),
  );
const selectDialogTitle = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get('dialogTitle'),
  );
const selectDialogMessage = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get('dialogMessage'),
  );
const selectIsMenuOpen = () =>
  createSelector(selectStructureDomain, substate => substate.get('isMenuOpen'));

const selectProfileData = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get('profileData'),
  );
const selectIsIndeterminateLoadingMotionActive = () =>
  createSelector(selectStructureDomain, substate =>
    substate.get('isIndeterminateLoadingMotionActive'),
  );

const makeSelectStructure = () =>
  createSelector(selectStructureDomain, substate => substate.toJS());

export default makeSelectStructure;
export {
  selectStructureDomain,
  selectIsDialogOpen,
  selectIsNotifOpen,
  selectNotifType,
  selectNotifMessage,
  selectDialogMessage,
  selectDialogTitle,
  selectIsMenuOpen,
  selectProfileData,
  selectIsIndeterminateLoadingMotionActive,
};
