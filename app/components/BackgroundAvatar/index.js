import React from 'react';

import BackgroundAvatarContainer from './BackgroundAvatarContainer';
import typekevAvatar from 'images/typekev-avatar.png';

export default function BackgroundAvatar(props) {
  return <BackgroundAvatarContainer src={typekevAvatar} {...props} />;
}
