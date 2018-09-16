import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const SocialMediaButton = styled(Button)`
  width: 100%;
  height: 4rem;
  background-color: ${props => `${props.background} !important`};
  border-radius: 0 !important;

  &&:hover {
    background-color: inherit !important;
  }
`;

export default SocialMediaButton;
