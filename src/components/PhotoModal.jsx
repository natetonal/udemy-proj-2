var React = require('react');

var PhotoModal = React.createClass({
    render: function(){

        var isThereADescription = function(desc){
            return desc ? <blockquote><p>{desc}</p></blockquote> : <p></p>;
        };

        var isThereAUser = function(user){
            return user ? <h6>From imgur user <span style={accountStyle}>{user}</span>:</h6> : <p></p>;
        };

        var styleModalImage = function(img, h) {
            return {
                margin: 5,
                border: "1px dotted #666",
                borderRadius: "20px",
                background: "url('" + img + "') no-repeat center center",
                backgroundSize: "cover"
            };
        };

        var accountStyle = {
            color: "red",
            fontWeight: 900
        };

        var modalTitleStyle = {
            textTransform: "uppercase",
            color: "#333"
        };

        return(
            <div className="modal fade" id={this.props.image.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 style={modalTitleStyle} className="modal-title" id="myModalLabel">{this.props.image.title}</h4>
                        </div>
                        <div className="modal-body">
                            {isThereAUser(this.props.image.account_url)}
                            {isThereADescription(this.props.image.description)}
                            <img style={styleModalImage(this.props.image.link, this.props.image.height)} src={this.props.image.link} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PhotoModal;
