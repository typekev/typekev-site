import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { transition } from 'static/Anim';

const SocialMediaButton = styled(Button)`
  transition: ${transition} !important;
  width: 100%;
  height: 4rem;
  background-color: ${props => `${props.background} !important`};
  color: white !important;
  border-radius: 0 !important;

  &&:hover {
    background-color: inherit !important;
    color: ${props => `${props.background} !important`};
  }
`;

export default SocialMediaButton;
