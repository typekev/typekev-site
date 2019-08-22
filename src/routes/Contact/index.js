import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Contact() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="/">
        typekev
      </Link>{' '}
      <small>{new Date().getFullYear()}</small>
    </Typography>
  );
}
