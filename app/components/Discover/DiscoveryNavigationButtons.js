import React from 'react';
import { Link } from 'react-router-dom';

import DiscoveryNavigationButton from './DiscoveryNavigationButton';
import ArrowLeft from 'mdi-material-ui/ArrowLeft';
import ArrowRight from 'mdi-material-ui/ArrowRight';

export default function DiscoveryNavigationButtons(props) {
  const { navigate } = props;
  return [
    <Link
      key="isRight"
      to={{
        pathname: '/discover',
        state: { from: window.location.pathname },
      }}
    >
      <DiscoveryNavigationButton
        isright="true"
        color="secondary"
        variant="contained"
        onClick={() => navigate(1, true)}
      >
        Next
        <span className="indent">
          <ArrowRight />
        </span>
      </DiscoveryNavigationButton>
    </Link>,
    <Link
      key="isLeft"
      to={{
        pathname: '/discover',
        state: { from: window.location.pathname },
      }}
    >
      <DiscoveryNavigationButton
        isleft="true"
        color="secondary"
        variant="contained"
        onClick={() => navigate(-1, true)}
      >
        <ArrowLeft />
        <span className="indent">Back</span>
      </DiscoveryNavigationButton>
    </Link>,
  ];
}
