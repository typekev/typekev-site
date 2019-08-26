import styled, { keyframes } from 'styled-components';
import theme from 'resources/theme';
import sunPositioning from 'templates/Page/sunPositioning';

const {
  palette: { secondary },
} = theme;

const breath = keyframes`
  0% {
     transform:scale(.7);
     background-color: ${secondary.main};
  }
  50% {
    transform:scale(1.5);
    background-color: ${secondary.light};
  }
  100% {
    transform:scale(.7);
    background-color: ${secondary.main};
  }
`;

const Sun = styled.div`
  ${sunPositioning}
  animation: ${breath} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 0;
`;

export default Sun;
