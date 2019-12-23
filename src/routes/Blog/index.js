import React, { useMemo } from 'react';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Keyboard, { Cursor } from 'react-mk';
import useBlog from 'hooks/useBlog';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import InvertedText from 'components/InvertedText';
import Link from 'components/Link';
import { ButtonGroup } from '@material-ui/core';

export default function Blog() {
  const [posts] = useBlog();

  return (
    <Transition in component={Grow}>
      <Content fixed align="left">
        <Typography variant="h5">
          <InvertedText align="left">
            <Keyboard>I am a writer</Keyboard>
            <Cursor />
          </InvertedText>
        </Typography>
        <br />
        <br />
        {useMemo(
          () =>
            Object.values(posts)
              .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
              .map(({ title, published }, index) => {
                const delay = (index + 1) * 800;
                return (
                  <div key={title}>
                    <Transition in component={Fade} delay={delay} timeout={1000}>
                      <ButtonGroup variant="outlined" color="inherit">
                        <Button disabled>{published}</Button>
                        <Button component={Link}>
                          <Keyboard keyPressDelayRange={[40, 90]}>
                            {({ type }) => type(delay, title)}
                          </Keyboard>
                        </Button>
                      </ButtonGroup>
                    </Transition>
                    <br />
                    <br />
                  </div>
                );
              }),
          [posts],
        )}
      </Content>
    </Transition>
  );
}
