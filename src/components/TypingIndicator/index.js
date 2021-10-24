import React from 'react';
import TypingIndicatorContainer from 'components/TypingIndicator/TypingIndicatorContainer';
import StyledDot from 'components/TypingIndicator/StyledDot';

export default function TypingIndicator({ ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TypingIndicatorContainer {...rest}>
      <StyledDot />
      <StyledDot />
      <StyledDot />
    </TypingIndicatorContainer>
  );
}
