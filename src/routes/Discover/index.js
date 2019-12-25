import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Keyboard, { Cursor } from 'react-mk';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import Title from 'components/Title';
import A from 'components/A';
import Link from 'components/Link';

const CURRENT_DATE = new Date();
const CURRENT_MONTH_IN_YEAR = CURRENT_DATE.getMonth();
const START_DATE = new Date(new Date().setFullYear(2013));
const yearsCounter =
  CURRENT_DATE.getFullYear() -
  START_DATE.getFullYear() +
  Math.round((CURRENT_MONTH_IN_YEAR / 12) * 10) / 10;

export default function Discover() {
  return (
    <Transition in component={Grow}>
      <Content fixed>
        <Typography variant="h5">
          <Title>
            <Keyboard>I am an explorer</Keyboard>
            <Cursor />
          </Title>
        </Typography>
        <br />
        <br />
        <Typography variant="body1">
          Hi, I&apos;m a full stack software engineer, and <i>I really like technology.</i>
          <br />
          <br />I have explored, and continue to explore all the technology that interests me: from
          front-end web and mobile development with <A href="https://reactjs.org">React</A> (for
          instance <A href="https://github.com/typekev/typekev-site">this website</A> that
          you&apos;re using right noe was made with React!); to blockchain engineering with
          <A href="https://www.hyperledger.org/">Hyperledger</A>; to building machine learning
          models with <A href="https://www.python.org/">Python</A>; to architecting cloud and
          serverless solutions on <A href="https://azure.microsoft.com/en-us/">Azure</A>,{' '}
          <A href="https://firebase.google.com/">Firebase</A>, and{' '}
          <A href="https://aws.amazon.com/">AWS</A>. Over the last {yearsCounter} years I have
          developed a deep understanding of computer science in both theory and practical
          application.
          <br />
          <br />I want to do more than simply write code. I want to write history. Therefore, I
          advocate for clean code, agile development, and innovative technologies.
          <br />
          <br />I am the proud husband of my wife{' '}
          <A href="https://typeclo.com/">Clouie, who is also a developer</A>. Together we are the
          happy parents of{' '}
          <A href="https://www.instagram.com/p/B13P55ZB2f4/">our son Casey; our future engineer</A>.
          <br />
          <br />
          We have a passion for life, learning, and technology.
        </Typography>
        <br />
        <br />
        <Button component={Link} to="/work" variant="contained" color="secondary">
          Click here to learn more about what I do
        </Button>
      </Content>
    </Transition>
  );
}
