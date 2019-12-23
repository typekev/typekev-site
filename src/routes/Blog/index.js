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

export const compare = (a, b) => (a.timestamp > b.timestamp ? -1 : 1);

export const sortPosts = posts => posts.sort(compare);

export const getDelay = index => (index + 1) * 800;

const doType = ({ delay, title }) => ({ type }) => type(delay, title);

export const renderPosts = posts => () =>
  posts.map(({ title, published }, index) => {
    const delay = getDelay(index);

    return (
      <div key={title}>
        <Transition in component={Fade} delay={delay} timeout={1000}>
          <ButtonGroup variant="outlined" color="inherit">
            <Button disabled>{published}</Button>
            <Button component={Link}>
              <Keyboard keyPressDelayRange={[40, 90]}>{doType({ delay, title })}</Keyboard>
            </Button>
          </ButtonGroup>
        </Transition>
        <br />
        <br />
      </div>
    );
  });

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
        {useMemo(renderPosts(sortPosts(Object.values(posts))), [posts])}
      </Content>
    </Transition>
  );
}
