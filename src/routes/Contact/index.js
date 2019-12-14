import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Keyboard, { Cursor } from 'react-mk';
import { mdiTwitter, mdiLinkedin, mdiInstagram, mdiFacebook } from '@mdi/js';
import Icon from '@mdi/react';
import { ButtonGroup } from '@material-ui/core';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import InvertedText from 'components/InvertedText';
import A from 'components/A';
import SocialMediaButton from './SocialMediaButton';

export default function Contact() {
  return (
    <Transition in component={Grow}>
      <Content fixed align="left">
        <Typography variant="h5">
          <InvertedText align="left">
            <Keyboard>I am a talker</Keyboard>
            <Cursor />
          </InvertedText>
        </Typography>
        <br />
        <br />
        <Typography variant="body1">
          To save us both time, I&apos;ve put together a brief outline of the different mediums you
          may avail in order to get in touch with me.
        </Typography>
        <div>
          <div>
            <h3>You should contact me by email if</h3>
            <ul>
              <li>
                You or your organization are interested in a training on React, Machine Learning,
                Artificial Intelligence, or Blockchain.
              </li>
              <br />
              <li>You&apos;d like me to consult on a project with you through Devoteam.</li>
              <br />
              <li>
                You have business oriented inquiries.{' '}
                <strong>
                  This medium would <em>not</em> be recommended for recruiters.
                </strong>
              </li>
            </ul>
            <p>
              If this fits your enquiry, you can reach me at{' '}
              <A href="mailto:kevin.gonzalez@devoteam.lu">
                <strong>kevin.gonzalez@devoteam.lu</strong>
              </A>
              .
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3>You should contact me by social media if</h3>
            <ul>
              <li>
                You want to know more about me.{' '}
                <strong>
                  This would be the ideal medium for recruiters; I&apos;d suggest{' '}
                  <A
                    href="https://linkedin.com/in/typekev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>LinkedIn</strong>
                  </A>
                  .
                </strong>
              </li>
              <br />
              <li>You&apos;d like to offer or receive career advice.</li>
              <br />
              <li>You have non-business related inquiries.</li>
            </ul>
            <ButtonGroup size="large" variant="outlined">
              <SocialMediaButton
                href="https://instagram.com/typekev"
                target="_Blank"
                color="#e4405f"
              >
                <Icon path={mdiInstagram} size={1} color="currentColor" />
              </SocialMediaButton>
              <SocialMediaButton
                href="https://linkedin.com/in/typekev"
                target="_Blank"
                color="#007bb5"
              >
                <Icon path={mdiLinkedin} size={1} color="currentColor" />
              </SocialMediaButton>
              <SocialMediaButton href="https://twitter.com/typekev" target="_Blank" color="#1da1f2">
                <Icon path={mdiTwitter} size={1} color="currentColor" />
              </SocialMediaButton>
              <SocialMediaButton
                href="https://facebook.com/typekev"
                target="_Blank"
                color="#3b5998"
              >
                <Icon path={mdiFacebook} size={1} color="currentColor" />
              </SocialMediaButton>
            </ButtonGroup>
          </div>
        </div>
      </Content>
    </Transition>
  );
}
