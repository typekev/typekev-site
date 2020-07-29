import React from 'react';
import Keyboard from 'react-mk';

export default function HeaderText() {
  return (
    <>
      <strong>typekev</strong> | <Keyboard>{({ type }) => type(500, 'software engineer')}</Keyboard>
    </>
  );
}
