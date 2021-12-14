/**
 *
 * Section
 *
 */
import {
  memo,
  useRef,
  PropsWithChildren,
  ReactNode,
  ComponentPropsWithoutRef,
} from 'react';
import { useInViewport } from 'react-in-viewport';
import styled, { css } from 'styled-components/macro';

import { media } from 'styles/media';

interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  title?: ReactNode;
  onEnterViewport: VoidFunction;
  onLeaveViewport?: VoidFunction;
  rootMargin?: string;
}

export const Section = memo(
  ({
    title,
    id,
    onEnterViewport,
    onLeaveViewport,
    rootMargin = '-10% 0px -90% 0px',
    children,
    ...rest
  }: PropsWithChildren<Props>) => {
    const ref = useRef<HTMLDivElement>(null);
    useInViewport(
      ref,
      {
        rootMargin,
      },
      undefined,
      { onEnterViewport, onLeaveViewport },
    );

    return (
      <div ref={ref} id={id} {...rest}>
        <SectionTitle>{title}</SectionTitle>
        <SectionContent>{children}</SectionContent>
      </div>
    );
  },
);

const SectionTitle = styled.h2`
  font-size: 1.25em;
  padding-top: 5em;
  margin-top: 0;
  margin-bottom: 0.25em;
  margin-left: 1px;

  ${css`
    ${media.small`
      padding-top: 5.5em;
      font-size: 1.5em;
    `}

    ${media.medium`
      padding-top: 6em;
      font-size: 2em;
    `}

    ${media.large`
      padding-top: 6.5em;
      font-size: 2.5em;
    `}
  `}
`;

const SectionContent = styled.section`
  font-size: 2em;
  ${css`
    ${media.small`
      font-size: 3em;
    `}

    ${media.medium`
      font-size: 4em;
    `}

    ${media.large`
      font-size: 5em;
    `}
  `}
`;
