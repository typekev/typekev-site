import styled from 'styled-components';
import { medium, large } from 'static/Dimens';

const DiscoverVideoContainer = styled.div`
  position: relative;
  padding-bottom: calc((100vw - 3rem) * (870 / 1440));
  margin: 2rem 0;

  @media (min-width: ${medium}) {
    padding-bottom: calc((100vw - 16rem) * (870 / 1440));
  }

  @media (min-width: ${large}) {
    padding-bottom: 66.6%;
  }
`;

export default DiscoverVideoContainer;
