var React = require('react');
var {Link, IndexLink} = require('react-router');
var PopupModal = require('PopupModal');

class Nav extends React.Component {
    state = {
        popupMessage: false,
        message: "I'm not seeking new opportunities at the moment."
            };

    handleNotif = () => {
        var that = this;

        this.setState({
            popupMessage: !this.state.popupMessage,
            message: this.state.message
        });
        setTimeout(function() {
            that.setState({
                popupMessage: false,
            });
        }, 1);
    };

    render() { 
        var {popupMessage, message} = this.state;

        function renderPopup () {
            if(popupMessage) {
                return (
                    <PopupModal message={message}/>
                )
            }
        }

        return (            
            <div className="top-bar sticky">
                <div className="medium-10 large-10 columns small-centered">
                    <div className="top-bar-left show-for-large">
                        <ul className="menu">
                        <li><IndexLink to="/" className="menu-text">Typekev</IndexLink></li>
                        <li><Link to="About" activeClassName="active">About</Link></li>
                        <li><Link to="Experience" activeClassName="active">Experience</Link></li>
                        <li><Link to="Company" activeClassName="active">Company</Link></li>
                        <li><Link to="Contact" activeClassName="active">Contact</Link></li>
                        </ul>
                    </div>
                    <div id="menuToggle" className="hide-for-large">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu" className="menu vertical">
                        <li><IndexLink to="/" className="menu-text">Typekev</IndexLink></li>
                        <li><Link to="About" activeClassName="active">About</Link></li>
                        <li><Link to="Experience" activeClassName="active">Experience</Link></li>
                        <li><Link to="Company" activeClassName="active">Company</Link></li>
                        <li><Link to="Contact" activeClassName="active">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <a>
                            <i onClick={this.handleNotif} className="fa fa-bell fa-3x bell" aria-hidden="true">
                                <div className="notif">!</div>    
                            </i>
                        </a>
                    </div>
                </div>
                {renderPopup()}
            </div>               
        );
    }
}

module.exports = Nav;