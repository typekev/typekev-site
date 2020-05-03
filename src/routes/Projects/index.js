import React from 'react';
import PropTypes from 'prop-types';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Keyboard, { Cursor } from 'react-mk';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Title from 'components/Title';
import List from 'components/List';
import ProjectContent from './ProjectContent';

export default function Projects({
  history,
  match: {
    params: { projectId },
  },
}) {
  const setProjectId = id => history.push(`/discover/projects/${id}`);
  const clearProjectId = () => setProjectId('');
  const title =
    projectId &&
    projectId
      .split('-')
      .join(' ')
      .replace(/\b\w/g, char => char.toUpperCase());

  return (
    <Transition in component={Grow}>
      <Content fixed>
        <Typography variant="h5">
          <ButtonGroup variant="outlined">
            {!!projectId && (
              <Transition in={!!projectId} component={Zoom}>
                <Button
                  disableElevation
                  color="secondary"
                  size="large"
                  variant="contained"
                  onClick={clearProjectId}
                >
                  Go back
                </Button>
              </Transition>
            )}
            <Title>
              <Keyboard
                sentenceDelayPerCharRange={[0, 0]}
                keyPressDelayRange={projectId && [60, 80]}
              >
                {title || 'I am a thinker'}
              </Keyboard>
              <Cursor />
            </Title>
          </ButtonGroup>
        </Typography>
        <br />
        <Transition in={!!projectId} component={Fade} timeout={1000}>
          {projectId ? (
            <>
              <ProjectContent fixed>
                <Box height="100%" boxShadow={20}>
                  <iframe width="100%" height="100%" title="test" src="/" />
                </Box>
                <br />
                <br />
                <Button color="secondary" variant="contained" onClick={clearProjectId}>
                  View all projects
                </Button>
              </ProjectContent>
            </>
          ) : (
            <span />
          )}
        </Transition>
        <br />
        <Transition in={!projectId} component={Fade} timeout={projectId ? 0 : 200}>
          <List>
            <li>
              <Transition in component={Fade} delay={0} timeout={1250}>
                <ButtonGroup variant="outlined" color="inherit">
                  <Hidden xsDown>
                    <Button disabled variant="contained">
                      TypeScript
                    </Button>
                  </Hidden>
                  <Button onClick={() => setProjectId('react-pathing-(coming-soon)')}>
                    <Keyboard keyPressDelayRange={[30, 50]}>
                      React Pathing&mdash;A Pathfinding Algorithm Visualizer (Coming Soon)
                    </Keyboard>
                  </Button>
                </ButtonGroup>
              </Transition>
            </li>
          </List>
        </Transition>
      </Content>
    </Transition>
  );
}

Projects.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ projectId: PropTypes.string }).isRequired })
    .isRequired,
};
