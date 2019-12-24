import React from 'react';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Keyboard, { Cursor } from 'react-mk';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import InvertedText from 'components/InvertedText';
import A from 'components/A';
import Link from 'components/Link';
import DevoteamLogo from 'components/DevoteamLogo';
import DevoteamLogoWrapper from './DevoteamLogoWrapper';

export default function Work() {
  return (
    <Transition in component={Grow}>
      <Content fixed>
        <DevoteamLogoWrapper>
          <DevoteamLogo />
        </DevoteamLogoWrapper>
        <Typography variant="h5">
          <InvertedText>
            <Keyboard>I am a #DigitalTransformaker</Keyboard>
            <Cursor />
          </InvertedText>
        </Typography>
        <br />
        <br />
        <Typography variant="body1">
          At <A href="https://lu.devoteam.com/">Devoteam Luxembourg</A> I function as a consultant,
          a leader, a teacher, and a confidant.
          <br />
          <br />I specialize in three general areas software engineering:
          <ol>
            <li>
              <strong>Machine Learning and Artificial Intelligence development</strong>, usually
              with Python.
            </li>
            <li>
              <strong>Blockchain and Smart Contract development</strong>, usually with Hyperledger.
            </li>
            <li>
              <strong>Modern web and native application development</strong> using JavaScript,
              usually with React.
            </li>
          </ol>
          Of course, I am not limited to working with these technologies alone, these are simply the
          technologies I see on a daily basis.
          <br />
          <br />
          If you&apos;d like to work with Devoteam and myself, you are more than welcome to get in
          touch with me.
          <br />
          You may also be interested in some of my written work.
        </Typography>
        <br />
        <br />
        <ButtonGroup variant="contained" color="secondary" aria-label="navigation links">
          <Button component={Link} to="/blog">
            Click here to read about my work
          </Button>
          <Button component={Link} to="/contact">
            Click here to contact me
          </Button>
        </ButtonGroup>
      </Content>
    </Transition>
  );
}
