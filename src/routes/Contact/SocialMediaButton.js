import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const SocialMediaButton = styled(Button)`
  height: 4rem;
  background-color: ${props => `${props.color}`} !important;
  border-color: ${props => `${props.color}`} !important;
  color: white !important;

  &:hover {
    background-color: transparent !important;
    color: ${props => `${props.color}`} !important;
  }
`;

export default SocialMediaButton;
