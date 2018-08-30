var React = require('react');

var Intro = () => (
        <div className="intro right">
            <div className="row">
                <div className="page intro-container right small-8 medium-12 columns">
                    <h2 className="intro-name left">Kevin<span className="hide-for-small-only"> Gonzalez </span></h2>
                    <h1 className="intro-title left">Dev<span className="hide-for-small-only">eloper</span>.</h1>
                    <h3 className="intro-text right">&#60;Let's call it full-stack&#47;&#62;</h3>
                    <div className="socials right">
                        <a href="https://github.com/typekev" target="_blank" className="button intro-social"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/typekev" target="_blank" className="button intro-social"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                        <a href="https://facebook.com/typekev" target="_blank" className="button intro-social"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                        <a href="https://instagram.com/typekev" target="_blank" className="button intro-social"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                        <a href="mailto:kev@typekev.com" target="_blank" className="button intro-social"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>            
            </div>
        </div>
);

module.exports = Intro;