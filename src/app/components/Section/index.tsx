/**
 *
 * Section
 *
 */
import { memo, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components/macro';

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
  font-size: 1.5em;
  line-height: 1;
  margin-top: 3em;
  margin-left: 0.25em;
`;

const SectionContent = styled.div`
  font-size: 3em;
`;
