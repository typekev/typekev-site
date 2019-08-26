import styled, { keyframes } from 'styled-components';
import theme from 'resources/theme';
import sunPositioning from 'templates/Page/sunPositioning';

const {
  palette: { secondary },
} = theme;

const blast = keyframes`
  0% {
     transform:scale(.7);
     opacity: 1;
     border-color: ${secondary.light};
     border-width: 1rem;
  }
  50% {
    transform:scale(2.5);
    opacity: 0;
    border-color: ${secondary.light};
    border-width: 0rem;
  }
`;

const Ray = styled.div`
  ${sunPositioning}
  border-width: 0;
  border-style: solid;
  animation: ${blast} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({ delay }) => delay}s;
  z-index: 0;
`;

export default Ray;
