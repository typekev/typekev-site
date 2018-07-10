/**
 *
 * Blog
 *
 */

import React from 'react';
import Rebloggr from 'components/Rebloggr';
import ConsoleLine from 'mdi-material-ui/ConsoleLine';
import BookOpenPageVariant from 'mdi-material-ui/BookOpenPageVariant';
import Typist from 'react-typist';
import Skeleton from 'react-loading-skeleton';

import BackgroundAvatar from 'components/BackgroundAvatar';

import BlogWrapper from './BlogWrapper';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const styles = {
  bookOpenPageVariant: {
    marginBottom: '0.5rem',
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class Blog extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <BackgroundAvatar />
        <div className="display-flex">
          <div className="flex" />
          <h1>
            <div className="grid-x">
              <Typist className="medium-6 auto cell">a lover of sharing</Typist>
              <div className="shrink cell">
                <BookOpenPageVariant
                  className="titleIcon"
                  style={styles.bookOpenPageVariant}
                />
              </div>
            </div>
          </h1>
        </div>
        <div className="display-flex">
          <div className="flex" />
          <BlogWrapper>
            <Rebloggr
              className="auto cell"
              titleIcon={<ConsoleLine />}
              titleClassName="font-weight-light"
              loadingComponent={
                <h1>
                  <Skeleton count={3} />
                </h1>
              }
            />
          </BlogWrapper>
        </div>
      </div>
    );
  }
}
