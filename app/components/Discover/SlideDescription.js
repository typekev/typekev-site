import styled from 'styled-components';
import { medium, large } from 'static/Dimens';

const SlideDescription = styled.span`
  @media (min-width: ${large}) {
    padding: 4rem 1.5rem 0 1.5rem;
    text-align: right;
  }
`;

export default SlideDescription;
