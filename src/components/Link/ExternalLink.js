import React from 'react';
import PropTypes from 'prop-types';
import A from 'components/A';

/* eslint-disable react/jsx-props-no-spreading */

function ExternalLink({ children, href, innerRef, ...rest }) {
  return (
    <A href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </A>
  );
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  innerRef: PropTypes.func,
};

ExternalLink.defaultProps = {
  innerRef: undefined,
};

export default React.forwardRef((props, ref) => <ExternalLink innerRef={ref} {...props} />);
