import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Earth from 'mdi-material-ui/Earth';
import CellphoneText from 'mdi-material-ui/CellphoneText';
import Newspaper from 'mdi-material-ui/Newspaper';
import AccountHeart from 'mdi-material-ui/AccountHeart';

import DiscoverVideo from './DiscoverVideo';
import DiscoverVideoContainer from './DiscoverVideoContainer';
import SlideDescription from './SlideDescription';

import devoteamDiscoveryLoopVideo from 'videos/devoteam-discovery-loop.webm';
import dimkastDiscoveryLoopVideo from 'videos/dimkast-discovery-loop.webm';
import uxpeakDiscoveryLoopVideo from 'videos/uxpeak-discovery-loop.webm';
import devoteamDiscoveryLoopVideoMp4 from 'videos/devoteam-discovery-loop.mp4';
import dimkastDiscoveryLoopVideoMp4 from 'videos/dimkast-discovery-loop.mp4';
import uxpeakDiscoveryLoopVideoMp4 from 'videos/uxpeak-discovery-loop.mp4';

const slides = [
  {
    title: 'a lover of exploration',
    icon: Earth,
    iconStyleName: 'earth',
    subtitle: 'I believe in research & discovery',
    view: (
      <span className="medium-8 cell text-align-right indent">
        I don't just write code. I write history. Software engineering is my
        never ending journey. Therefore, I advocate for clean code, agile
        development, and innovative technologies. I don't wait for the future. I
        make it. Swipe left to learn more about where I work and what I do.
        <br />
        <br />
        <Link
          to={{
            pathname: '/discover/1',
            state: { from: window.location.pathname },
          }}
        >
          <Button color="secondary" variant="contained">
            See where I work
          </Button>
        </Link>
      </span>
    ),
  },
  {
    title: 'devoteam & me',
    icon: AccountHeart,
    iconStyleName: 'accountHeart',
    subtitle: 'Digital Transformakers',
    view: (
      <div className="cell grid-x">
        <SlideDescription className="large-4 cell">
          Some people wait for the future.
          <br />
          At <strong>Devoteam</strong>, we make it.
          <br />
          <br />
          I function as a consultant, a leader, a teacher, and a friend. I
          specialize in JavaScript technologies; specifically React.
          <br />
          <br />
          In addition, I have a strong passion for emerging technologies, so I
          function as a Blockchain specialist and actively study and test new
          tools with my team.
          <br />
          <br />
          <Button
            color="secondary"
            variant="contained"
            href="https://lu.devoteam.com"
            target="_blank"
          >
            Visit Devoteam
          </Button>
        </SlideDescription>
        <DiscoverVideoContainer className="large-8 cell">
          <DiscoverVideo controls loop autoPlay muted>
            <source src={devoteamDiscoveryLoopVideo} type="video/webm" />
            <source src={devoteamDiscoveryLoopVideoMp4} type="video/mp4" />
          </DiscoverVideo>
        </DiscoverVideoContainer>
      </div>
    ),
  },
  {
    title: 'dimkast',
    icon: CellphoneText,
    iconStyleName: 'cellphoneText',
    subtitle: 'Turning passion into money',
    view: (
      <div className="cell grid-x">
        <SlideDescription className="large-4 cell">
          Why not do what you love?
          <br />
          <strong>Dimkast</strong> makes nightlife easy for everyone.
          <br />
          <br />
          I built the production version of this app using React Native. It's a
          service that connects passionate freelancers with the jobs they love.
          <br />
          <br />
          You'll be able to find <strong>Dimkast</strong> in the Google Play
          Store and Apple App Store. Currently it is only available in
          Luxembourg.
          <br />
          <br />
          <Button
            variant="contained"
            href="https://dimkast.com"
            target="_blank"
          >
            Try Dimkast
          </Button>
        </SlideDescription>
        <DiscoverVideoContainer className="large-8 cell">
          <DiscoverVideo controls loop autoPlay muted>
            <source src={dimkastDiscoveryLoopVideo} type="video/webm" />
            <source src={dimkastDiscoveryLoopVideoMp4} type="video/mp4" />
          </DiscoverVideo>
        </DiscoverVideoContainer>
      </div>
    ),
  },
  {
    title: 'uxpeak',
    icon: Newspaper,
    subtitle: 'Sharing user experience and technology news',
    view: (
      <div className="cell grid-x">
        <SlideDescription className="large-4 cell">
          I like to keep up with the latest tech news.
          <br />
          <strong>UXPeak</strong> is an online magazine where writers share
          there thoughts on design, technology, and programming.
          <br />
          <br />
          I built the site for fun, but it has since become an active hub for
          writers from many different backgrounds.
          <br />
          <br />
          <Button
            color="primary"
            variant="contained"
            href="https://uxpeak.com"
            target="_blank"
          >
            Read UXPeak
          </Button>
        </SlideDescription>
        <DiscoverVideoContainer className="large-8 cell">
          <DiscoverVideo controls loop autoPlay muted>
            <source src={uxpeakDiscoveryLoopVideo} type="video/webm" />
            <source src={uxpeakDiscoveryLoopVideoMp4} type="video/mp4" />
          </DiscoverVideo>
        </DiscoverVideoContainer>
      </div>
    ),
  },
];

export default slides;
