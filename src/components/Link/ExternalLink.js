import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/jsx-props-no-spreading */

function ExternalLink({ children, href, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default React.forwardRef((props, ref) => <ExternalLink innerRef={ref} {...props} />);
