import React from 'react';
import Icon from '@mdi/react';
import { mdiSquareSmall } from '@mdi/js';

export default function Dot({ ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Icon path={mdiSquareSmall} size={1} color="currentColor" {...rest} />;
}
