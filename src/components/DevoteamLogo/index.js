import React from 'react';
import devoteamLogoPath from './devoteamLogoPath';

function DevoteamLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <g>
        <path fill="currentColor" d={devoteamLogoPath} transform="scale(12.84)" />
      </g>
    </svg>
  );
}

export default DevoteamLogo;
