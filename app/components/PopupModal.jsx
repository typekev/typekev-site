var React =require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

class PopupModal extends React.Component {
    static defaultProps = {
        title:'',
    };

    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string.isRequired
    };

    componentDidMount() {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="popup-modal" className="reveal popup-modal" data-reveal=''>
                <h4>{title}</h4>
                <h4 className="left">{message}</h4>
                <p>
                    <a><i className="fa fa-times fa-2x right" data-close=''></i></a>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#popup-modal'));
        modal.open();

        $('.popup-modal').last().addClass( "popup-modal-right" );
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

module.exports = PopupModal;
