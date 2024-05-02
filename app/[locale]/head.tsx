export const title = "Kevin Gonzalez | Software Visionary & Engineering Leader";
export const description =
  "Explore the portfolio of Kevin Gonzalez (typekev), a seasoned Software Visionary and Engineering Leader. Learn about Kevin's work and interests, and connect with him via LinkedIn or email for meaningful discussions and potential collaborations.";
const url = "https://typekev.com/";
const author = "Kevin Gonzalez";
const twitter = "@typekev";

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist,Artificial Intelligence"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="site" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={"/icons/share.png"} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Kevin Gonzalez" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <script src="https://unpkg.com/ios-pwa-splash@1.0.0/cdn.min.js" />
      <script>iosPWASplash('/apple-touch-icon.png', '#060509');</script>
      <link rel="manifest" href="/site.webmanifest" />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1.0" />
      <meta name="theme-color" content="#060509" />
      <link rel="shortcut icon" href="/apple-touch-icon.png" />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </>
  );
}
