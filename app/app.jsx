var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Intro = require('Intro');
var About = require('About');
var Experience = require('Experience');
var Company = require('Company');
var Contact = require('Contact');

require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

require('style!css!sass!appStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="About" component={About}/>
            <Route path="Experience" component={Experience}/>
            <Route path="Company" component={Company}/>
            <Route path="LearnMore" component={Company}/>
            <Route path="Contact" component={Contact}/>
            <IndexRoute component={Intro}/>
        </Route>
    </Router>,
    document.getElementById('app')
);