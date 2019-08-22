import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'components/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" to="/">
        typekev
      </Link>{' '}
      <small>{new Date().getFullYear()}</small>
    </Typography>
  );
}
