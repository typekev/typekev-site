import React from 'react';

import Typist from 'react-typist';

import { primaryColorDark, accentColorLight, accentText } from 'static/Colors';

import Slide from './Slide';
import slides from './slides';

import ViewSubtitle from './ViewSubtitle';

const styles = {
  earth: {
    color: primaryColorDark,
  },
  accountHeart: {
    color: accentColorLight,
  },
  cellphoneText: {
    color: accentText,
  },
};

export default function SlideRenderer(params) {
  const { index = 0, key } = params;
  const props = slides[index] || {};
  const {
    title,
    icon = <div />,
    iconStyleName,
    subtitle,
    view = <div />,
  } = props;
  const TitleIcon = icon;
  return (
    <Slide key={key}>
      <div className="display-flex">
        <div className="flex" />
        <h1>
          <div className="grid-x">
            <Typist className="medium-6 auto cell">{title}</Typist>
            <div className="shrink cell">
              <TitleIcon
                className="titleIcon"
                style={iconStyleName && styles[iconStyleName]}
              />
            </div>
          </div>
        </h1>
      </div>
      <div className="display-flex">
        <div className="flex" />
        <ViewSubtitle>{subtitle}</ViewSubtitle>
      </div>
      <div className="grid-x">
        <div className="auto cell" />
        {view}
      </div>
    </Slide>
  );
}
