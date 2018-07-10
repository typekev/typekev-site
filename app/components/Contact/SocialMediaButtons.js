import React from 'react';

import Button from '@material-ui/core/Button';
import Facebook from 'mdi-material-ui/Facebook';
import Twitter from 'mdi-material-ui/Twitter';
import LinkedIn from 'mdi-material-ui/LinkedIn';
import Instagram from 'mdi-material-ui/Instagram';

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

const getSocialMediaButtons = buttonNames =>
  buttonNames.map(buttonName => {
    const icon = getButtonIconByName(buttonName);
    return (
      <div key={buttonName} className="small-6 medium-shrink cell text-align-center">
        <Button
          color="default"
          variant="fab"
          target="_Blank"
          href={`https://${buttonName}.com/${
            buttonName === 'LinkedIn' ? 'in/' : ''
          }typekev`}
        >
          {icon}
        </Button>
      </div>
    );
  });

export default function SocialMediaButtons(props) {
  const socialMediaButtonsList = [
    'Twitter',
    'Facebook',
    'Instagram',
    'LinkedIn',
  ];
  const buttons = getSocialMediaButtons(socialMediaButtonsList);
  return (
    <div className="grid-x grid-margin-x grid-padding-y">
      <div className="large-auto cell" />
      {buttons}
    </div>
  );
}
