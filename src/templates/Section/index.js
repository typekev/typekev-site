import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const Section = styled(Container)`
  flex: 1 1 100%;
  max-width: 100%;
  overflow: hidden scroll;
  z-index: 1;
  pointer-events: none;
  display: flex;

  * {
    pointer-events: initial;
  }
`;

export default Section;
