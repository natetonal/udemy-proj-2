var React = require('react');
var Radium = require('radium');

// Include this.props.children to load in the other routes.
var Header = React.createClass({

    render: function(){

        var headerText = {
            fontWeight: 900,
            fontSize: "4em"
        };

        var taglineText = {
            textIndent: 10,
            marginTop: -15,
            marginBottom: 20,
            fontWeight: 900
        };

        var headerStyle = {
            background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1)), url('http://www.citypictures1.com/upload/files/actual/Bald_Eagle_Head_and_American_Flag.jpg') no-repeat bottom center",
            backgroundSize: "cover",
            fontFamily: "Alegreya Sans",
            fontWeight: 100,
            paddingLeft: 30,
            color: "white"
        };

        var navStyle = {
            marginRight: 10
        };

        var headerLinkStyle = {
            color: "#aaa",
            textDecoration: "none",

            ':hover': {
                color: "#fff"
            },
            ':focus': {
                color: "#aaa"
            },
            ':active': {
                color: "#aaa"
            }
        };

        var socialButtons = {
            marginRight: 20,
            marginTop: 10
        };

        var btnStyle = {
            background: "inherit"
        };

        return(
            <div style={headerStyle}>
                <div className="row">
                    <div className="col-sm-7">
                        <h1 style={headerText}>Country News</h1>
                        <h4 style={taglineText}>Top stories from the US of A.</h4>
                    </div>
                    <div className="col-sm-5">
                        <div className="row">
                            <div style={socialButtons} className="btn-group btn-group-xs" role="group" aria-label="...">
                                <button key="twitter" type="button" style={Object.assign({}, btnStyle, headerLinkStyle)} className="btn btn-xs"><i className="fa fa-twitter-square"></i></button>
                                <button key="facebook" type="button" style={Object.assign({}, btnStyle, headerLinkStyle)} className="btn btn-xs"><i className="fa fa-facebook-square"></i></button>
                                <button key="instagram" type="button" style={Object.assign({}, btnStyle, headerLinkStyle)} className="btn btn-xs"><i className="fa fa-instagram"></i></button>
                                <button key="linkedin" type="button" style={Object.assign({}, btnStyle, headerLinkStyle)} className="btn btn-xs"><i className="fa fa-linkedin-square"></i></button>
                                <button key="envelope" type="button" style={Object.assign({}, btnStyle, headerLinkStyle)} className="btn btn-xs"><i className="fa fa-envelope"></i></button>
                            </div>
                        </div>
                        <div className="row">
                            <div style={navStyle}>
                                <h3><a key='news' style={headerLinkStyle} href="/#/news">News</a> | <a key='phoots' style={headerLinkStyle} href="/#/photos">Photos</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Radium(Header);
