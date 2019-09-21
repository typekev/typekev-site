import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';

export { RouterLink };

/* eslint-disable react/jsx-props-no-spreading */
const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

export default function Link(props) {
  return <MuiLink component={AdapterLink} {...props} />;
}
