import React, { useState, useEffect } from 'react';
import Keyboard, { Cursor } from 'react-mk';

const typeNames = ({ type }) => type(1000, 'Kevin Gonzalez ', 'typekev ');
const typeTitles = ({ type }) => type(3500, ' husband', ' dad', ' leader', ' software engineer');

export default function HeaderText() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    setTimeout(() => setBlink(false), 20000);
  }, []);

  return (
    <>
      <strong>
        <Keyboard keyPressDelayRange={[70, 80]} sentenceDelayPerCharRange={[600, 600]}>
          {typeNames}
        </Keyboard>
      </strong>
      <Cursor blink={blink} />
      <Keyboard keyPressDelayRange={[60, 70]} sentenceDelayPerCharRange={[120, 150]}>
        {typeTitles}
      </Keyboard>
    </>
  );
}
