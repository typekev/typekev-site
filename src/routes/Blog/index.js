import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Hidden from '@material-ui/core/Hidden';
import Keyboard, { Cursor } from 'react-mk';
import useBlog from 'hooks/useBlog';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Title from 'components/Title';
import A from 'components/A';
import List from 'components/List';
import PostContent from './PostContent';

export const compare = (a, b) => (a.timestamp > b.timestamp ? -1 : 1);

export const sortPosts = posts => posts.sort(compare);

export const getDelay = index => index * 250;

const doType = ({ delay, title }) => ({ type }) => type(delay, title);

export const renderPosts = (posts, setPostId) => () =>
  posts.map(({ title, published, location }, index) => {
    const delay = getDelay(index);

    return (
      <li key={title}>
        <Transition in component={Fade} delay={delay} timeout={1250}>
          <ButtonGroup variant="outlined" color="inherit">
            <Hidden xsDown>
              <Button disabled variant="contained">
                {published}
              </Button>
            </Hidden>
            <Button onClick={() => setPostId(location)}>
              <Keyboard keyPressDelayRange={[30, 50]}>{doType({ delay, title })}</Keyboard>
            </Button>
          </ButtonGroup>
        </Transition>
      </li>
    );
  });

export default function Blog({
  history,
  match: {
    params: { postId },
  },
  initialPost,
}) {
  const [posts, { title, content }, getPost] = useBlog(initialPost);

  const setPostId = id => history.push(`/blog/${id}`);
  const clearPostId = () => setPostId('');

  useEffect(() => {
    getPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const titleEl = (
    <Title>
      {postId && title ? (
        <Keyboard key={postId} sentenceDelayPerCharRange={[0, 0]} keyPressDelayRange={[60, 80]}>
          {title}
        </Keyboard>
      ) : (
        <Keyboard sentenceDelayPerCharRange={[0, 0]}>I am a thinker</Keyboard>
      )}
      <Cursor />
    </Title>
  );

  return (
    <Transition in component={Grow}>
      <Content fixed>
        <Typography variant="h5">
          <Hidden smDown>
            <ButtonGroup variant="outlined">
              {!!title && (
                <Transition in={!!title} component={Zoom}>
                  <Button
                    disableElevation
                    color="secondary"
                    size="large"
                    variant="contained"
                    onClick={clearPostId}
                  >
                    Go back
                  </Button>
                </Transition>
              )}
              {titleEl}
            </ButtonGroup>
          </Hidden>
          <Hidden mdUp>
            <ButtonGroup variant="outlined">{titleEl}</ButtonGroup>
          </Hidden>
        </Typography>
        <br />
        <Transition in={!!content} component={Fade} timeout={1000} delay={100}>
          <PostContent fixed maxWidth="md">
            <Typography component="span">
              <ReactMarkdown source={content} renderers={{ paragraph: Typography, link: A }} />
            </Typography>
            {!!content && (
              <>
                <br />
                <br />
                <Button color="secondary" variant="contained" onClick={clearPostId}>
                  View all posts
                </Button>
              </>
            )}
          </PostContent>
        </Transition>
        <br />
        <Transition in={!content} component={Fade} timeout={content ? 0 : 200}>
          <List visible={!content}>
            {useMemo(renderPosts(sortPosts(Object.values(posts)), setPostId), [posts])}
          </List>
        </Transition>
      </Content>
    </Transition>
  );
}

Blog.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ postId: PropTypes.string }).isRequired })
    .isRequired,
  initialPost: PropTypes.shape({}),
};

Blog.defaultProps = {
  initialPost: undefined,
};
