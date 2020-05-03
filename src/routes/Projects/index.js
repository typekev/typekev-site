import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Keyboard, { Cursor } from 'react-mk';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Title from 'components/Title';

export default function Projects() {
  return (
    <Transition in component={Grow}>
      <Content fixed>
        <Typography variant="h5">
          <Title>
            <Keyboard>I am a maker</Keyboard>
            <Cursor />
          </Title>
        </Typography>
        <br />
        <br />
      </Content>
    </Transition>
  );
}
