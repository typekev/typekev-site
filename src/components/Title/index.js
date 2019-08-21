import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line react/jsx-props-no-spreading
const Title = styled(props => <Typography variant="h5" color="inherit" {...props} />)`
  flex: 1 1 auto;
  white-space: pre;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default Title;
