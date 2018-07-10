import styled from 'styled-components';

import { medium } from 'static/Dimens';

const Slide = styled.div`
  overflow-x: hidden;
  min-height: calc(100vh - (9rem));

  @media (min-width: ${medium}) {
    min-height: calc(100vh - (10rem));
  }
`;

export default Slide;
