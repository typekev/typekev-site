import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import getParticleParams from 'templates/Page/getParticleParams';
import Transition from 'components/Transition';

const StyledParticles = styled(Particles)`
  & canvas {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 1.25rem;
    z-index: 0;
  }
`;

export default function Stars() {
  const theme = useTheme();
  const params = getParticleParams(theme);

  return (
    <Transition in component={Fade}>
      <div>
        <StyledParticles params={params} />
      </div>
    </Transition>
  );
}
