import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';
import { large } from 'static/Dimens';
import { transition } from 'static/Anim';

const DiscoveryNavigationButton = styled(Button)`
  position: fixed !important;
  bottom: 6rem;
  opacity: 0.75;
  transition: ${transition} !important;
  z-index: 1;

  ${props =>
    props.isright &&
    css`
      right: 2rem;
    `};

  ${props =>
    props.isleft &&
    css`
      left: 2rem;
    `};

  @media (max-width: ${large}) {
    visibility: hidden;
  }

  &&:hover {
    opacity: 1;
  }
`;

export default DiscoveryNavigationButton;
