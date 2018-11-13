import styled from 'styled-components';

import { backgroundColorDark, backgroundColor } from 'static/Colors';
import { transition } from 'static/Anim';
import { shadow } from 'static/Accents';
import { large, medium, small } from 'static/Dimens';

const BackgroundAvatarContainer = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-position-y: center;
  position: fixed;
  bottom: 0rem;
  left: calc(75% - 32vh);
  width: 72vh;
  height: 72vh;
  border-radius: 50%;
  background-color: ${backgroundColorDark};
  box-shadow: ${shadow};
  border: 4rem solid ${backgroundColor};
  opacity: ${props => (props.isHidden ? '0' : '1')};
  transition: ${transition};
  z-index: -1;

  @media (max-width: ${large}) {
    left: calc(75% - 34vh);
    width: 60vh;
    height: 60vh;
  }

  @media (max-width: ${medium}) {
    background-image: ${props => `linear-gradient( to left top, 
    rgba(208, 0, 53, 0.55),
    rgba(28, 34, 71, 0.45)
    ),
    url(${props.src})`};
    left: calc(50% - 50vw);
    width: 100vw;
    height: 100vw;
  }

  @media (max-width: ${small}) {
    display: none;
  }
`;

export default BackgroundAvatarContainer;
