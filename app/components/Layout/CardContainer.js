import styled from 'styled-components';

import { backgroundContrastDarkGradient } from 'static/Colors';
import { medium } from 'static/Dimens';

const CardContainer = styled.div`
  background: ${backgroundContrastDarkGradient};
  padding-top: 3.5rem;
  padding-bottom: 0.063rem;

  @media (min-width: ${medium}) {
    padding-top: 4rem;
  }
`;

export default CardContainer;
