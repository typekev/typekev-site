import 'whatwg-fetch';
const exposedWordPressAboutPage =
  'https://blog.typekev.com/wp-json/wp/v2/pages/96';
export const getProfileData = () =>
  fetch(exposedWordPressAboutPage)
    .then(response => response.json())
    .then(aboutPageData => {
      return aboutPageData;
    });
