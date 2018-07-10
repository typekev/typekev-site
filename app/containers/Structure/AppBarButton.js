import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  height: 4rem !important;
`;

const StyledIcon = styled.div`
  font-size: 2.5rem !important;
`;

function AppBarButton(props) {
  const { title, icon, to, ...rest } = props;

  return (
    <NavLink
      exact={!to}
      activeClassName="active"
      to={{
        pathname: to || '/',
        state: { from: window.location.pathname },
      }}
      {...rest}
    >
      <StyledButton color="inherit">
        <h3 className="font-weight-light">{title}</h3>
        <StyledIcon> {icon}</StyledIcon>
      </StyledButton>
    </NavLink>
  );
}

export default AppBarButton;
