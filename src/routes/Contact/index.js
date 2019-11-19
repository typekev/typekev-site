import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Keyboard, { Cursor } from 'react-mk';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import InvertedText from 'components/InvertedText';

export default function Contact() {
  return (
    <Transition in component={Grow}>
      <Content fixed align="left">
        <Typography variant="h5">
          <InvertedText align="left">
            <Keyboard>I am a talker</Keyboard>
            <Cursor />
          </InvertedText>
        </Typography>
        <br />
        <br />
        <Typography variant="body1">Contact</Typography>
      </Content>
    </Transition>
  );
}
