import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { medium } from 'static/Dimens';

const StyledButton = styled(Button)`
  height: 3.5rem !important;
  width: calc(100vw - 4.75rem) !important;

  @media (min-width: ${medium}) {
    height: 4rem !important;
    width: 20rem !important;
  }
`;

const StyledTitle = styled.div`
  position: absolute;
  left: 3rem;
`;

const StyledIcon = styled.div`
  position: absolute;
  right: 1.5rem;
  font-size: 2.5rem !important;
`;

function DrawerButton(props) {
  const { onClick, title, icon, to } = props;

  return (
    <NavLink
      exact
      activeClassName="active"
      to={{
        pathname: to || '/',
        state: { from: window.location.pathname },
      }}
    >
      <StyledButton color="inherit" onClick={onClick}>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>
          <span className="font-weight-light">{title}</span>
        </StyledTitle>
      </StyledButton>
    </NavLink>
  );
}

export default DrawerButton;
