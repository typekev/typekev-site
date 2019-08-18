import React from 'react';

import typekevAvatar from 'images/typekev-avatar-wpap.svg';

import BackgroundAvatarContainer from './BackgroundAvatarContainer';

export default function BackgroundAvatar(props) {
  return <BackgroundAvatarContainer src={typekevAvatar} {...props} />;
}
