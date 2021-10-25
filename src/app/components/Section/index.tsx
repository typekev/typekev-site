/**
 *
 * Section
 *
 */
import { memo, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components/macro';

import { media } from 'styles/media';

interface Props {
  title?: ReactNode;
}

export const Section = memo(({ title, children }: PropsWithChildren<Props>) => {
  return (
    <>
      {title !== undefined && <SectionTitle>{title}</SectionTitle>}
      {children !== undefined && <SectionContent>{children}</SectionContent>}
    </>
  );
});

const SectionTitle = styled.div`
  font-size: 1.25em;
  line-height: 1;
  margin-top: 3em;
  margin-left: 1px;

  ${media.small`
    font-size: 1.5em;
    margin-left: 4px;
  `}
`;

const SectionContent = styled.div`
  font-size: 2em;

  ${media.small`
    font-size: 3em;
  `}
`;
