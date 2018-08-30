var React = require('react');
var PopupModal = require('PopupModal');

class Contact extends React.Component {
    state = {
        popupMessage: false,
        message: "Thank you!"
            };

    handleSubmit = (e) => {
    e.preventDefault()

        var name = this.refs.name.value;
        var email = this.refs.email.value;
        var message = this.refs.message.value;
        var that = this;
        
        if(name && email && message) {
        fetch('/Contact', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name: name,
            email: email,
            message: message
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success) {
            this.setState({formSent: true})
            }
            else this.setState({formSent: false})
        })
        .catch((error) => {
            console.error(error);
        });
            
            this.refs.name.value = '';
            this.refs.email.value = '';
            this.refs.message.value = '';
            this.setState({
                popupMessage: !this.state.popupMessage,
                message: "Message delivered!"
            });
            setTimeout(function() {
                that.setState({
                    popupMessage: false,
                });
            $('.popup-modal').last().addClass( "popup-modal-sent" );
            }, 1);
                
            } else if(!name) {
                this.refs.name.focus();
                this.setState({
                    popupMessage: !this.state.popupMessage,
                    message: "Please fill in your name"
                });
                setTimeout(function() {
                    that.setState({
                        popupMessage: false,
                    });
                }, 1);

            } else if(!email) {
                this.refs.email.focus();
                this.setState({
                    popupMessage: !this.state.popupMessage,
                    message: "Please fill in your email address"
                });
                setTimeout(function() {
                    that.setState({
                        popupMessage: false,
                    });
                }, 1);
            } else {
                this.refs.message.focus();
                this.setState({
                    popupMessage: !this.state.popupMessage,
                    message: "Please fill in your message"
                });
                setTimeout(function() {
                    that.setState({
                        popupMessage: false,
                    });
                }, 1);
            } 
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
            <div className="contact">
                <div className="row page">
                    <div className="large-12 columns">                
                    <h1>&#60;Let's Chat&#47;&#62;</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="large-6 columns">
                            <input className="contactmsg" type="text" ref="name" placeholder="Name"/>
                        </div>
                        <div className="large-6 columns">
                            <input className="contactmsg" type="email" ref="email" placeholder="Email"/>  
                        </div>
                        <div className="large-12 columns">
                            <textarea className="contactmsg" type="message" ref="message" placeholder="Message"/>  
                        </div>
                        <div className="large-12 columns">
                        <input type='submit' className="button" value="Send your message"/>             
                        </div>
                    </form>
                </div>
                {renderPopup()}
            </div>
        )
    }
}

module.exports = Contact;