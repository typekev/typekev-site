import styled from 'styled-components';
import { accentText, backgroundContrastDark } from 'static/Colors';
import { transition } from 'static/Anim';
import { shadow } from 'static/Accents';
import { medium } from 'static/Dimens';

const BlogWrapper = styled.span`
  font-size: 18px;
  min-width: 100%;

  && svg {
    margin: 0 0.5rem 0.25rem 0;
    width: 1.125rem;
  }

  && a {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    margin: 0.0625rem;
    min-width: 0%;
    transition: ${transition};
    background: ${backgroundContrastDark};
    opacity: 0.8;
  }

  && a:hover {
    min-width: 100%;
    transition: ${transition};
    background: ${accentText};
    box-shadow: ${shadow};
    opacity: 0.95;
  }

  && h1 {
    margin: 0;
  }

  @media (min-width: ${medium}) {
    min-width: 36rem;
  }
`;

export default BlogWrapper;
