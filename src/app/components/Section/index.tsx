/**
 *
 * Section
 *
 */
import { memo, PropsWithChildren, ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

import { media } from 'styles/media';

interface Props {
  title?: ReactNode;
}

export const Section = memo(({ title, children }: PropsWithChildren<Props>) => {
  return (
    <>
      {title !== undefined && <SectionTitle>{title}</SectionTitle>}
      <SectionContent>{children}</SectionContent>
    </>
  );
});

const SectionTitle = styled.h2`
  font-size: 1.25em;
  line-height: 0;
  margin-top: 4em;
  margin-left: 1px;

  ${css`
    ${media.small`
      margin-top: 4.5em;
      font-size: 1.5em;
    `}

    ${media.medium`
      margin-top: 5em;
      font-size: 2em;
    `}

    ${media.large`
      margin-top: 5.5em;
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
