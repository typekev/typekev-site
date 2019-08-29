import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import particleParams from 'templates/Page/particleParams';

const StyledParticles = styled(Particles)`
  & canvas {
    position: fixed;
    right: 0;
    left: 0;
  }
`;

export default function Stars() {
  return <StyledParticles params={particleParams} />;
}
