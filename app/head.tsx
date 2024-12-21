export const title = "Kevin Gonzalez";
export const description =
  "Kevin Gonzalez is a Luxembourg-based product-focused software engineer dedicated to developing exceptional, customer-centric software experiences.";
const url = "https://typekev.com/";
const author = "Kevin Gonzalez";
const twitter = "@typekev";
const image = "/v5.jpeg";

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
        content="Software Engineer, Product Engineer, Senior Software Engineer, Principal Software Engineer, Software Engineering Lead, Engineering Lead, Product Engineering Lead, Software Engineer in Luxembourg, Software Engineer from New York, AI Engineer, Satellite Software Engineer, Product Development Engineer, Cloud Engineer, Web Developer, Software Developer"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />

      {/* Facebook Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:profile:first_name" content="Kevin" />
      <meta property="og:profile:last_name" content="Gonzalez" />
      <meta property="og:profile:username" content="typekev" />
      <meta property="og:locale" content="en_US" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Kevin Gonzalez" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <script src="https://unpkg.com/ios-pwa-splash@1.0.0/cdn.min.js" async />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <script>iosPWASplash('/apple-touch-icon.png', '#060509');</script>
      <link rel="manifest" href="/site.webmanifest" />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1.0" />
      <meta name="theme-color" content="#060509" />
      <link rel="shortcut icon" href="/apple-touch-icon.png" />

      {/* Twitter Summary card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google Site Verification */}
      <meta name="google-site-verification" content="w13ZaXcqdnD2RPoT5eARCsqU5HpPRxKijms2p60J-Yg" />
    </>
  );
}
