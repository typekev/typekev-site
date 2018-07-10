import styled, { css } from 'styled-components';

import { backgroundColorDark, backgroundColor } from 'static/Colors';
import { transition } from 'static/Anim';
import { shadow } from 'static/Accents';
import { large, medium } from 'static/Dimens';

const BackgroundAvatarContainer = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  position: fixed;
  bottom: -5rem;
  left: calc(75% - 37.5vh);
  width: 75vh;
  height: 75vh;
  border-radius: 50%;
  background-color: ${backgroundColorDark};
  box-shadow: ${shadow};
  border: 2rem solid ${backgroundColor};
  opacity: ${props => (props.isHidden ? '0' : '1')};
  transition: ${transition};
  z-index: -1;

  @media (max-width: ${large}) {
    bottom: -3rem;
    left: calc(75% - 30vh);
    width: 60vh;
    height: 60vh;
  }

  @media (max-width: ${medium}) {
    display: none;
  }
`;

export default BackgroundAvatarContainer;
