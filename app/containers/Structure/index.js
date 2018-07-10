import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectStructure, {
  selectIsDialogOpen,
  selectIsNotifOpen,
  selectNotifType,
  selectNotifMessage,
  selectDialogMessage,
  selectDialogTitle,
  selectIsMenuOpen,
  selectProfileData,
  selectIsIndeterminateLoadingMotionActive,
} from './selectors';
import {
  openNotifAction,
  openDialogAction,
  openMenuAction,
  getProfileDataRequestAction,
} from './actions';
import reducer from './reducer';
import saga from './saga';

import Drawer from '@material-ui/core/Drawer';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import { ChevronLeft, Close } from 'mdi-material-ui';

import Layout from 'components/Layout';
import IndeterminateProgressMotion from 'components/IndeterminateProgressMotion';

import DrawerButton from './DrawerButton';
import AppBarButton from './AppBarButton';

const styles = {
  drawerChevronLeft: {
    width: '2rem',
    height: '2rem',
  },
};

class Structure extends React.Component {
  componentWillMount() {
    const { getProfileData } = this.props;
    getProfileData();
  }

  render() {
    const {
      children,
      openNotif,
      isNotifOpen,
      notifType,
      notifMessage,
      openDialog,
      isDialogOpen,
      dialogTitle,
      dialogMessage,
      openMenu,
      isMenuOpen,
      ...rest
    } = this.props;

    return (
      <div>
        <IndeterminateProgressMotion
          active={rest.isIndeterminateLoadingMotionActive}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isNotifOpen}
          autoHideDuration={isNotifOpen ? 8000 : undefined}
          onClose={() => openNotif()}
          snackbarcontentprops={{
            'aria-describedby': 'notif-main',
          }}
          message={<span id="notif-main">{notifMessage}</span>}
          action={[
            notifType ? (
              <Link
                key={notifType}
                to={{
                  pathname: `/${notifType}`,
                  state: { from: window.location.pathname },
                }}
              >
                <Button color="inherit" onClick={() => openNotif()}>
                  {notifType}
                </Button>
              </Link>
            ) : (
              notifType
            ),
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => openNotif()}
            >
              <Close />
            </IconButton>,
          ]}
        />
        <Drawer open={isMenuOpen} onClose={openMenu}>
          <DrawerButton
            title=""
            icon={<ChevronLeft style={styles.drawerChevronLeft} />}
            onClick={openMenu}
            to="#"
          />
          <Divider />
          <DrawerButton title="About" onClick={openMenu} />
          <DrawerButton title="Discover" to="/discover" onClick={openMenu} />
          <DrawerButton title="Blog" to="/blog" onClick={openMenu} />
          <DrawerButton title="Contact" to="/contact" onClick={openMenu} />
        </Drawer>
        <Layout
          openNotif={openNotif}
          openDialog={openDialog}
          openMenu={openMenu}
          menuItemsList={[
            <AppBarButton
              className="show-for-large"
              key="about"
              title="About"
            />,
            <AppBarButton
              className="show-for-large"
              key="discover"
              title="Discover"
              to="/discover"
            />,
            <AppBarButton
              className="show-for-large"
              key="blog"
              title="Blog"
              to="/blog"
            />,
            <AppBarButton
              className="show-for-large"
              key="contact"
              title="Contact"
              to="/contact"
            />,
          ]}
        >
          {React.cloneElement(children, { ...rest })}
        </Layout>
      </div>
    );
  }
}

Structure.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  structure: makeSelectStructure(),
  isDialogOpen: selectIsDialogOpen(),
  isNotifOpen: selectIsNotifOpen(),
  isMenuOpen: selectIsMenuOpen(),
  notifType: selectNotifType(),
  notifMessage: selectNotifMessage(),
  dialogMessage: selectDialogMessage(),
  dialogTitle: selectDialogTitle(),
  profileData: selectProfileData(),
  isIndeterminateLoadingMotionActive: selectIsIndeterminateLoadingMotionActive(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    openNotif: (type, message) => dispatch(openNotifAction(type, message)),
    openDialog: (title, message) => dispatch(openDialogAction(title, message)),
    openMenu: () => dispatch(openMenuAction()),
    getProfileData: () => dispatch(getProfileDataRequestAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'structure', reducer });
const withSaga = injectSaga({ key: 'structure', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Structure);
