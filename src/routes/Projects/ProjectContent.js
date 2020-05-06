import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const ProjectContent = styled(Container)`
  height: calc(100% - 4.5rem);

  & > div {
    border-radius: 0.25rem;
    position: relative;
  }

  & iframe {
    border: none;
    border-radius: 0.25rem;
  }
`;

export default ProjectContent;
