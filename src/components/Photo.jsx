var React = require('react');
var Radium = require('radium');

var PhotoModal = require('./PhotoModal.jsx');

var Photo = React.createClass({
    
    render: function(){

        var styleImage = function(img){
            return {
                height: 100,
                margin: 5,
                width: "100%",
                border: "1px dotted #666",
                borderRadius: "20px",
                background: "url('" + img + "') no-repeat center center",
                backgroundSize: "cover",
                ':hover': {
                    cursor: "pointer"
                }
            };
        };

        return(
        <div>
            <div className="col-xs-6 col-sm-4 col-md-3">
                <div style={styleImage(this.props.image.link)} data-toggle="modal" data-target={"#" + this.props.image.id}></div>
            </div>
            <PhotoModal image={this.props.image} />
        </div>
        );
    }
});

module.exports = Radium(Photo);
