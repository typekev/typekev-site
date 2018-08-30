var React = require('react');

var Experience = () => (
        <div className="experience">
            <div className="row page">
                <div className="large-12 columns left">                
                    <h2>&#60;My Work&#47;&#62;</h2><br/><br/>
                </div>
                <div className="experience-container small-8 medium-12 columns">
                    <div className="row work">
                        <img className="works columns large-7 left" src="images/dimkast.png"></img>
                        <div className="exp-text columns large-5 left">
                            <h2 className="experience-name">Dimkast</h2>
                            <h3>Making nightlife work easy & safe. I led the Design and Development of this project. Full-Stack.</h3>                    
                            <a href="https://dimkast.com" target="_blank" className="button">See Project</a>             
                        </div>
                    </div>
                    <div className="row work">
                        <img className="works columns large-7 right" src="images/juga.png"></img>
                        <div className="exp-text columns large-5 right">
                            <h2 className="experience-name">JugaTV</h2>
                            <h3>Making social engagements more social. I was a User Experience Design Consultant on this project.</h3>       
                            <a href="https://juga.tv" target="_blank" className="button">See Project</a>             
                        </div>
                    </div>
                    <div className="row work">
                        <img className="works columns large-7 left" src="images/unduit.png"></img>
                        <div className="exp-text columns large-5 left">
                            <h2 className="experience-name">Unduit</h2>
                            <h3>Get your device fixed without leaving your home. I worked on the Front-End of this project.</h3>                    
                            <a href="https://unduit.com" target="_blank" className="button">See Project</a>             
                        </div>
                    </div>
                    <div className="row work">
                        <img className="works columns large-7 right" src="images/track.png"></img>
                        <div className="exp-text columns large-5 right">
                            <h2 className="experience-name">TrackTax</h2>
                            <h3>Financial tracking for freelancers. My focus was on this products perceived trustworthiness. Experience Design.</h3>       
                            <a href="https://track.tax" target="_blank" className="button">See Project</a>             
                        </div>
                    </div>
                    <div className="row work">
                        <img className="works columns large-7 left" src="images/psdto.png"></img>
                        <div className="exp-text columns large-5 left">
                            <h2 className="experience-name">psdtomt</h2>
                            <h3>Developing your PSD's into to literally anything. I was a Front-End Consultant on this project. </h3>                    
                            <a href="https://psdtomanythings.com" target="_blank" className="button">See Project</a>             
                        </div>
                    </div>
                </div>            
            </div>
        </div>
);

module.exports = Experience;