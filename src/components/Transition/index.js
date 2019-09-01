import React from 'react';
import PropTypes from 'prop-types';

function Transition({ component: Component, delay, ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component style={{ transitionDelay: delay }} {...rest} />;
}

Transition.propTypes = {
  component: PropTypes.elementType.isRequired,
  delay: PropTypes.number,
};

Transition.defaultProps = {
  delay: 0,
};

export default Transition;
