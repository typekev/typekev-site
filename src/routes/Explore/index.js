import React from 'react';
import Grow from '@material-ui/core/Grow';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Bot from 'routes/Explore/Bot';

export default function Explore() {
  return (
    <Transition in component={Grow}>
      <Content align="center" maxWidth="md">
        <Bot />
      </Content>
    </Transition>
  );
}
