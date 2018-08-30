var React = require('react');
var Nav = require('Nav');

var Main = (props) => (
        <div>
            <Nav/>
            <div className="text-center">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
);

module.exports = Main;