import React from 'react';
import { Link } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Keyboard, { Cursor } from 'react-mk';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Title from 'components/Title';
import A from 'components/A';
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
          <Title>
            <Keyboard>I am a #DigitalTransformaker</Keyboard>
            <Cursor />
          </Title>
        </Typography>
        <br />
        <br />
        <Typography variant="body1">
          At <A href="https://lu.devoteam.com/">Devoteam Luxembourg</A> I function as a consultant,
          a leader, a teacher, and a confidant.
          <br />
          <br />I specialize in three general areas of software development:
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
          You may also be interested in reading some of the articles I&apos;ve authored.
        </Typography>
        <br />
        <br />
        <ButtonGroup variant="contained" color="secondary" aria-label="navigation links">
          <Button component={Link} to="/blog">
            Click here to view my writings
          </Button>
          <Button component={Link} to="/contact">
            Click here to contact me
          </Button>
        </ButtonGroup>
      </Content>
    </Transition>
  );
}
