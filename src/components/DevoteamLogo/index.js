import React from 'react';
import devoteamLogoPath from './devoteamLogoPath';

function DevoteamLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="258.7" height="258.7" viewBox="0 0 258.7 258.7">
      <g>
        <path fill="currentColor" d={devoteamLogoPath} transform="scale(10.75)" />
      </g>
    </svg>
  );
}

DevoteamLogo.propTypes = {};

export default DevoteamLogo;
