import React from 'react';

import Facebook from 'mdi-material-ui/Facebook';
import Twitter from 'mdi-material-ui/Twitter';
import LinkedIn from 'mdi-material-ui/Linkedin';
import Instagram from 'mdi-material-ui/Instagram';

import SocialMediaButton from './SocialMediaButton';

const getButtonIconByName = buttonName => {
  switch (buttonName) {
    case 'Twitter':
      return <Twitter />;
    case 'Facebook':
      return <Facebook />;
    case 'LinkedIn':
      return <LinkedIn />;
    case 'Instagram':
      return <Instagram />;
    default:
      return buttonName;
  }
};

const getButtonColorByName = buttonName => {
  switch (buttonName) {
    case 'Twitter':
      return '#1da1f2';
    case 'Facebook':
      return '#3b5998';
    case 'LinkedIn':
      return '#007bb5';
    case 'Instagram':
      return '#e4405f';
    default:
      return buttonName;
  }
};

const getSocialMediaButtons = buttonNames =>
  buttonNames.map(buttonName => {
    const icon = getButtonIconByName(buttonName);
    return (
      <div key={buttonName} className="small-6 medium-3 cell">
        <SocialMediaButton
          color="secondary"
          variant="contained"
          target="_Blank"
          href={`https://${buttonName}.com/${
            buttonName === 'LinkedIn' ? 'in/' : ''
          }typekev`}
          background={getButtonColorByName(buttonName)}
        >
          {icon}
        </SocialMediaButton>
      </div>
    );
  });

export default function SocialMediaButtons() {
  const socialMediaButtonsList = [
    'Twitter',
    'LinkedIn',
    'Instagram',
    'Facebook',
  ];
  const buttons = getSocialMediaButtons(socialMediaButtonsList);
  return (
    <div className="grid-x">
      <div className="cell" />
      {buttons}
    </div>
  );
}
