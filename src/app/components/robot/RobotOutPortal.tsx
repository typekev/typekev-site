/**
 *
 * Robot
 *
 */
import { ComponentPropsWithoutRef, forwardRef, memo, useMemo } from 'react';
import { OutPortal } from 'react-reverse-portal';
import styled, { css } from 'styled-components/macro';
import { media } from 'styles/media';
import { animations } from 'styles/animations';

import { Robot } from '../Robot';
import { robotPortalNode } from './robotPortalNode';

export const RobotOutPortal = memo(
  forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof Robot>>(
    (props, ref) => {
      const node = useMemo(() => robotPortalNode, []);
      return (
        <OutPortalContainer ref={ref}>
          <OutPortal node={node} {...props} />
        </OutPortalContainer>
      );
    },
  ),
);

const OutPortalContainer = styled.div`
  position: relative;

  > * {
    --float-x: 0em;

    ${css`
      ${media.small`
         --float-x: 0.125em;
       `}

      ${media.medium`
         --float-x: 0.5em;
       `}
    `}

    position: absolute;
    display: flex;
    float: right;
    align-items: center;
    right: 1.25em;
    gap: 0.5em;
    animation: ${animations.float};

    ${css`
      ${media.small`
         right: 2em;
         gap: 1em;
       `}

      ${media.medium`
         right: 3em;
         gap: 1.5em;
       `}
 
       ${media.large`
         right: 7em;
         gap: 2em;
       `}
    `}
  }
`;
