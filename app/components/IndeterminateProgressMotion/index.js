import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import ProgressMotionContainer from './ProgressMotionContainer';

export default function IndeterminateProgressMotion(props) {
  const { active } = props;
  return (
    <ProgressMotionContainer active={active}>
      <LinearProgress className="grow-flex" color="secondary" />
    </ProgressMotionContainer>
  );
}
