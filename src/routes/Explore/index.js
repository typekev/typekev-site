import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grow from '@material-ui/core/Grow';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Title from 'components/Title';

export default function Explore() {
  return (
    <Transition in component={Grow}>
      <Content align="center">
        <Title variant="h6" align="center">
          Explore
        </Title>
        <TextField
          id="chatbot-input"
          margin="dense"
          autoFocus
          hiddenLabel
          variant="filled"
          placeholder="Tell me something..."
          inputProps={{ 'aria-label': 'chatbot input' }}
        />
      </Content>
    </Transition>
  );
}
