import React from 'react';
import PropTypes from 'prop-types';
import Section from 'templates/Section';
import Sun from 'templates/Page/Sun';
import Ray from 'templates/Page/Ray';
import Stars from 'templates/Page/Stars';

export default function Page({ children, open }) {
  return (
    <>
      <Stars />
      {[0, 0.125, 0.75, 1.5, 2.75].map(delay => (
        <Ray key={delay} delay={delay} open={open} />
      ))}
      <Sun open={open} />
      <Section>{children}</Section>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
};

Page.defaultProps = {
  open: false,
};
