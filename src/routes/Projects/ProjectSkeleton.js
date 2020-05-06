import React from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import MuiPaper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';

const Paper = styled(MuiPaper)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const ProjectSkeleton = () => (
  <Paper>
    <CardContent>
      <Skeleton
        animation="wave"
        height={10}
        width="60%"
        style={{ marginBottom: 6, marginTop: 32 }}
      />
      <Skeleton animation="wave" height={10} width="50%" />
    </CardContent>
    <Skeleton
      animation="wave"
      variant="rect"
      height="70%"
      style={{ marginLeft: 32, marginRight: 32 }}
    />
    <Skeleton
      animation="wave"
      variant="rect"
      height={30}
      width="80%"
      style={{ marginTop: 16, marginLeft: 32, marginRight: 32 }}
    />
    <Skeleton
      animation="wave"
      variant="circle"
      width={56}
      height={56}
      style={{
        position: 'absolute',
        right: 24,
        bottom: 24,
      }}
    />
  </Paper>
);

export default ProjectSkeleton;
