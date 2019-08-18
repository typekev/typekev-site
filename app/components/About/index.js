import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typist from 'react-typist';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Heart from 'mdi-material-ui/Heart';

import { accentColorDark } from 'static/Colors';

import BackgroundAvatar from 'components/BackgroundAvatar';

import messages from './messages';

const styles = {
  heart: {
    color: accentColorDark,
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class About extends React.PureComponent {
  render() {
    const { profileData } = this.props;
    function createProfileContent() {
      return { __html: profileData.getIn(['content', 'rendered']) };
    }

    return (
      <div>
        <BackgroundAvatar
          isHidden={profileData.getIn(['content', 'rendered']).length < 1}
        />
        <div className="display-flex">
          <div className="flex" />
          <h1>
            <div className="grid-x">
              <Typist className="medium-6 auto cell">
                a lover of technology
              </Typist>
              <div className="shrink cell">
                <Heart className="titleIcon" style={styles.heart} />
              </div>
            </div>
          </h1>
        </div>
        <div className="display-flex grid-x">
          <div className="flex auto cell" />
          {profileData.getIn(['content', 'rendered']).length > 1 ? (
            <span
              className="medium-8 cell font-weight-light text-align-right indent"
              color="inherit"
              dangerouslySetInnerHTML={createProfileContent()}
            />
          ) : (
            <span className="medium-8 cell text-align-right">
              <Skeleton count={3} />
              <br />
              <br />
              <Skeleton />
            </span>
          )}
        </div>
        <br />
        <div className="grid-x">
          <div className="auto cell" />
          <Link
            to={{
              pathname: '/discover',
              state: { from: window.location.pathname },
            }}
          >
            <Button variant="contained" color="secondary">
              Discover!
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
