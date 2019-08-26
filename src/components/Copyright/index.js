import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExternalLink from 'components/Link/ExternalLink';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <ExternalLink color="inherit" href="https://typekev.com" target="_self">
        typekev
      </ExternalLink>{' '}
      <small>{new Date().getFullYear()}</small>
    </Typography>
  );
}
