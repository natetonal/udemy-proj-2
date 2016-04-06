var React = require('react');

// Include this.props.children to load in the other routes.
var Footer = React.createClass({

    render: function(){

        var footerStyle = {
            fontFamily: "Alegreya Sans",
            height: 100,
            background: "#26617f",
            fontWeight: 100,
            color: "white"
        };

        var smallFooterSubtitleAdjustment = {
            marginTop: -10,
            textIndent: 10
        };

        return(
            <div style={footerStyle} className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <h2>This, my friends...</h2>
                    <h6 style={smallFooterSubtitleAdjustment}>is what we refer to in the biz as a "footer".</h6>
                </div>
            </div>
        );
    }
});

module.exports = Footer;
