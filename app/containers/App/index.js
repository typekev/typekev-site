import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import About from 'components/About/Loadable';
import Blog from 'components/Blog/Loadable';
import Discover from 'components/Discover/Loadable';
import Contact from 'components/Contact/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Structure from 'containers/Structure';

const normalizePath = hash =>
  hash
    .split('')
    .filter(
      (char, indexOfChar) => char !== '/' || char !== hash[indexOfChar + 1],
    )
    .join('');

const StructuredRoute = ({ component: Component, ...rest }) => (
  <Route
    render={props => (
      <Structure {...props}>
        <Component {...rest} />
      </Structure>
    )}
    {...rest}
  />
);

export default function App() {
  const { hash } = window.location;
  return (
    <Switch>
      {!!hash && (
        <Redirect
          to={`${normalizePath(hash).substring(hash.indexOf('#') + 1)}`}
        />
      )}
      <StructuredRoute exact path="/" component={About} />
      <StructuredRoute path="/discover/:index?" component={Discover} />
      <StructuredRoute path="/contact" component={Contact} />
      <StructuredRoute path="/blog" component={Blog} />
      <Redirect from="*" to="/" />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
