/**
 *
 * Discover
 *
 */

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

import BackgroundAvatar from 'components/BackgroundAvatar';

import ShiftingBackgroundGradient from './ShiftingBackgroundGradient';
import DiscoveryNavigationButtons from './DiscoveryNavigationButtons';
import SlideRenderer from './SlideRenderer';
import slides from './slides';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

/* eslint-disable react/prefer-stateless-function */
export default class Discover extends React.PureComponent {
  state = {
    index: 0,
  };

  static getDerivedStateFromProps(props, state) {
    const { index } = props.computedMatch.params;
    if (index) {
      return {
        index: parseInt(index),
      };
    }
    return null;
  }

  handleSwipe = (swipeDirectionAsInteger, isVirtualNavigation) => {
    if (!isVirtualNavigation) {
      const { history } = this.props;
      history.push('/discover');
    }
    const nextIndex = isVirtualNavigation
      ? this.state.index + swipeDirectionAsInteger
      : swipeDirectionAsInteger;

    const lastSlideIndex = slides.length - 1;
    const isLastSlide = nextIndex > lastSlideIndex;
    const isFirstSlide = nextIndex < 0;

    const index = isLastSlide ? 0 : isFirstSlide ? lastSlideIndex : nextIndex;

    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <BackgroundAvatar isHidden={index !== 0} />
        <ShiftingBackgroundGradient index={index} />
        <div className="grid-x">
          <DiscoveryNavigationButtons navigate={this.handleSwipe} />
          <VirtualizeSwipeableViews
            resistance
            enableMouseEvents
            className="cell"
            slideCount={slides.length}
            index={index}
            onChangeIndex={nextIndex => this.handleSwipe(nextIndex)}
            slideRenderer={SlideRenderer}
          />
        </div>
      </div>
    );
  }
}
