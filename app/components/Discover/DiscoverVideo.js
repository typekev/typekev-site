import styled, { css } from 'styled-components';
import { large } from 'static/Dimens';
import { backgroundColorDark } from 'static/Colors';
import { shadow } from 'static/Accents';

const DiscoverVideo = styled.video`
  ${props =>
    props.src &&
    css`
      background-image: url(${props.src});
    `};
  background-color: ${backgroundColorDark};
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: ${shadow};
  background-repeat: no-repeat;
  background-size: contain;
  border: 1rem solid ${backgroundColorDark};
  border-radius: 0.25rem;

  @media (min-width: ${large}) {
    height: calc(890 / 1440 * 100%);
  }
`;

export default DiscoverVideo;
