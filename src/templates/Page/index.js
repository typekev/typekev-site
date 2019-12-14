import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import Transition from 'components/Transition';
import Section from 'templates/Section';
import Sun from 'templates/Page/Sun';
import Ray from 'templates/Page/Ray';
import Stars from 'templates/Page/Stars';

export default function Page({ children, open }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Transition in component={Fade} timeout={3300}>
        <Stars />
      </Transition>
      {[0, 0.125, 0.75, 1.5, 2.75].map(delay => (
        <Ray key={delay} delay={delay} open={open} />
      ))}
      <Sun open={open} />
      <Transition in component={Fade} delay={775} timeout={775}>
        <Section>{children}</Section>
      </Transition>
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
