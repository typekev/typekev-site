import styled from 'styled-components';

import { backgroundDarkGradient } from 'static/Colors';
import { shadow } from 'static/Accents';
import { medium } from 'static/Dimens';

const ContactOptionContainer = styled.div`
  padding: 0 0 0.5rem 0;
  && > div {
    padding: 1rem;
    background: ${backgroundDarkGradient};
    min-height: 100%;
    border-radius: 0.25rem;
    box-shadow: ${shadow};
  }

  @media (min-width: ${medium}) {
    padding: 1rem;

    && > div {
      padding: 2rem 3rem 3rem 3rem;
    }
  }
`;

export default ContactOptionContainer;
