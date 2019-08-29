import React from 'react';
import PropTypes from 'prop-types';
import Section from 'templates/Section';
import Sun from 'templates/Page/Sun';
import Ray from 'templates/Page/Ray';
import Stars from 'templates/Page/Stars';

export default function Page({ children }) {
  return (
    <>
      <Stars />
      <Ray delay={0} />
      <Ray delay={0.125} />
      <Ray delay={0.75} />
      <Ray delay={1.5} />
      <Ray delay={2.75} />
      <Sun />
      <Section>{children}</Section>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
