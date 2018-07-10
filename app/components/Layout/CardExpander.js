import styled from 'styled-components';

import { medium } from 'static/Dimens';

const CardExpander = styled.div`
  position: relative;
  height: calc(100vh - (7rem));
  padding: 1rem 2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 1;

  @media (min-width: ${medium}) {
    height: calc(100vh - (8rem));
    padding: 1rem 4rem;
  }
`;

export default CardExpander;
