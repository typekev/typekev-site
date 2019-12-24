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
import InvertedText from 'components/InvertedText';
import A from 'components/A';
import PostList from './PostList';
import PostContent from './PostContent';

export const compare = (a, b) => (a.timestamp > b.timestamp ? -1 : 1);

export const sortPosts = posts => posts.sort(compare);

export const getDelay = index => index * 800;

const doType = ({ delay, title }) => ({ type }) => type(delay, title);

export const renderPosts = (posts, setPostId) => () =>
  posts.map(({ title, published, location }, index) => {
    const delay = getDelay(index);

    return (
      <li key={title}>
        <Transition in component={Fade} delay={delay} timeout={1000}>
          <ButtonGroup variant="outlined" color="inherit">
            <Hidden xsDown>
              <Button disabled variant="contained">
                {published}
              </Button>
            </Hidden>
            <Button onClick={() => setPostId(location)}>
              <Keyboard keyPressDelayRange={[40, 80]}>{doType({ delay, title })}</Keyboard>
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
}) {
  const [posts, { title, content }, getPost] = useBlog();

  const setPostId = id => history.push(`/blog/${id}`);
  const clearPostId = () => setPostId('');

  useEffect(() => {
    getPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

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
                    Back
                  </Button>
                </Transition>
              )}
              <InvertedText>
                {postId && !title ? (
                  ''
                ) : (
                  <Keyboard
                    sentenceDelayPerCharRange={[0, 0]}
                    keyPressDelayRange={title && [60, 80]}
                  >
                    {title || 'I am a thinker'}
                  </Keyboard>
                )}
                <Cursor />
              </InvertedText>
            </ButtonGroup>
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
        <Transition in={!content} component={Fade} timeout={content ? 0 : 700}>
          <PostList visible={!content}>
            {useMemo(renderPosts(sortPosts(Object.values(posts)), setPostId), [posts])}
          </PostList>
        </Transition>
      </Content>
    </Transition>
  );
}

Blog.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ postId: PropTypes.string }).isRequired })
    .isRequired,
};
