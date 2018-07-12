/**
 *
 * Contact
 *
 */

import React from 'react';
import Forum from 'mdi-material-ui/Forum';
import Typist from 'react-typist';

import Instagram from 'mdi-material-ui/Instagram';

import { backgroundContrastLight } from 'static/Colors';

import SocialMediaButtons from './SocialMediaButtons';
import ContactOptionContainer from './ContactOptionContainer';

const styles = {
  forum: {
    color: backgroundContrastLight,
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class Contact extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="display-flex">
          <div className="flex" />
          <h1>
            <div className="grid-x">
              <Typist className="medium-6 auto cell flex">
                a lover of communication
              </Typist>
              <div className="shrink cell">
                <Forum className="titleIcon" style={styles.forum} />
              </div>
            </div>
          </h1>
        </div>
        <div className="grid-x">
          <div className="auto cell" />
          <span className="text-align-right medium-10 cell grid-x">
            <div className="cell">
              So you'd like to get in touch.
              <br />
              <br />
              To save us both time, I've put together a brief guide to help you
              find the best medium to reach me through.
              <br />
              <br />
            </div>
            <ContactOptionContainer className="large-6 cell">
              <div>
                <h3>You should contact me by email if</h3>
                <ul dir="rtl">
                  <li>
                    You or your organization are interested in a training on
                    React or Blockchain
                  </li>
                  <br />
                  <li>
                    You'd like me to consult on a project with you through
                    Devoteam
                  </li>
                  <br />
                  <li>
                    You are looking for career advice or have other business
                    questions
                  </li>
                  <br />
                </ul>
                <div>
                  If this fits your enquiry, you can reach me at{' '}
                  <a href="mailto:kev@typekev.com">
                    <strong>kev@typekev.com</strong>.
                  </a>
                </div>
              </div>
            </ContactOptionContainer>
            <ContactOptionContainer className="large-6 cell">
              <div>
                <h3>You should contact me by social media if</h3>
                <ul dir="rtl">
                  <li>You want to say hello</li>
                  <br />
                  <li>You want to know more about me</li>
                  <br />
                  <li>Any other reason</li>
                </ul>
                <span className="text-align-right cell">
                  <SocialMediaButtons />
                </span>
                <br />
                <span>
                  Find me everywhere as{' '}
                  <a href="https://twitter.com/typekev" target="_blank">
                    <strong>@typekev</strong>
                  </a>
                </span>
              </div>
            </ContactOptionContainer>
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
