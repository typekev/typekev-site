var React = require('react');

var About = () => (
        <div className="about">
            <div className="row">
                <div className="page about-container small-8 columns">
                    <h2>&#60;Kevin Gonzalez&#47;&#62;</h2>
                    <h3 className="about-text">
                        Hey, I’m a Developer.<br/><br/>

                        I love working with full-stacks and front-ends, and I 
                        generally enjoy doing my best at whatever I do.<br/><br/>

                        I think of myself as a fun guy, and I prefer working
                        with fun people. I am young and excited to learn
                        more each day.<br/><br/>

                        I typically enjoy working with newer technologies
                        such as React and Angular, but I can totally work
                        with older tech like .NET, PHP, and Python.
                    </h3>
                    <div className="socials">
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

module.exports = About;