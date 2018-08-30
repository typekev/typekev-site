var React = require('react');

var Company = () => {

        $('#arrow').click(function() {
            $('html, body').animate({scrollTop: $(document).height()}, 'slow'); 
            return false;
        });
    
    return (
        <div className="company">
            <div className="devoteam columns large-6 small-12"></div>
            <div className="ampersand">&</div>
            <a id="arrow" href="#LearnMore"><div className="arrow fa fa-arrow-down" aria-hidden="true"></div></a>
            <div className="typekev columns large-6 small-12"></div>
            <div className="company columns small-12" id="LearnMore">
                <h2 className="page">TypeKev & Devoteam</h2>
                <h3>Creating together</h3>                  
                <a href="http://devoteam.lu" target="_blank" className="button">Learn more</a>
                <h2 className="page"></h2>                             
            </div>
        </div>
    )
};

module.exports = Company;