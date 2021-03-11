import React, { useState, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import Keyboard, { Cursor } from 'react-mk';
import { TYPEKEV_SITE_PREV_WELCOMED } from 'resources/constants';

const TIMING_MAP = {
  LONG: { blink: 35000, names: 1600, titles: 28000 },
  SHORT: { blink: 12000, names: 300, titles: 8000 },
};

const typeNames = ({ type }) => type('Kevin Gonzalez ', 'typekev ');
const typeTitles = time => ({ type }) => type(time, ' software engineer');
export const getTiming = isFirstImpression => () =>
  isFirstImpression ? TIMING_MAP.LONG : TIMING_MAP.SHORT;

export default function HeaderText() {
  const [cookies] = useCookies([TYPEKEV_SITE_PREV_WELCOMED]);
  const [blink, setBlink] = useState(true);

  const isFirstImpression =
    !cookies[TYPEKEV_SITE_PREV_WELCOMED] && ['/', '/explore/'].includes(window.location.pathname);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const timing = useMemo(getTiming(isFirstImpression), []);

  useEffect(() => {
    setTimeout(() => setBlink(false), timing.blink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoTypeTitles = useMemo(() => typeTitles(timing.titles), []);

  return (
    <>
      <strong>
        <Keyboard
          keyPressDelayRange={[70, 80]}
          sentenceDelayPerCharRange={[timing.names, timing.names]}
        >
          {typeNames}
        </Keyboard>
      </strong>
      <Cursor blink={blink} />
      <Keyboard keyPressDelayRange={[60, 70]} sentenceDelayPerCharRange={[120, 150]}>
        {memoTypeTitles}
      </Keyboard>
    </>
  );
}
