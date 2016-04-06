var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

// Include this.props.children to load in the other routes.
var Base = React.createClass({

    render: function(){

        return(
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
});

module.exports = Base;
