import React from 'react';
import PropTypes from 'prop-types';
import Sun from 'templates/Page/Sun';
import Ray from 'templates/Page/Ray';

export default function Page({ children }) {
  return (
    <>
      {children}
      <Ray delay={0} />
      <Ray delay={0.125} />
      <Ray delay={0.75} />
      <Ray delay={1.5} />
      <Ray delay={3} />
      <Sun />
    </>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
