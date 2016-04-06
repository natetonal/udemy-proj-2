var React = require('react');

var Article = React.createClass({
    render: function(){

        // Extremely minimal error-checking
        var title = this.props.item.title ? this.props.item.title : "No title found.";
        var subtitle = this.props.item.subtitle ? this.props.item.subtitle : "No subtitle found.";
        var date = this.props.item.date ? this.props.item.date : "No date found.";
        var volume = this.props.item.volume ? this.props.item.volume : "?";
        var issue = this.props.item.issue ? this.props.item.issue : "?";
        var tags = this.props.item.tags ? this.props.item.tags : "No tags found.";
        var text = this.props.item.text ? this.props.item.text : "No text.";
        var image = this.props.item.image ? this.props.item.image : "boo.jpg";
        var url = this.props.item.url ? this.props.item.url : "http://www.google.com/";
        var avatar = this.props.item.avatar ? this.props.item.avatar: "boo.jpg";

        var panelStyle = {
            marginTop: 10,
            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.2)"
        };

        return(
            <div style={panelStyle} className="panel panel-default">
                <div className="panel-body">
                    <h1>{title}</h1>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={avatar} className="img-responsive block-center" />
                            <hr />
                            <h3><small>{subtitle}</small></h3>
                            <h4>{date}</h4>
                            <h6>Volume #{volume}, Issue #{issue}</h6>
                            <h6><small>Tags: {tags}</small></h6>
                        </div>
                        <div className="col-sm-9">
                            <img src={image} className="img-responsive block-center" />
                        </div>
                    </div>
                    <hr />
                    <p>{text}</p>
                    <p>[<a href={url} target="_blank">Read More</a>]</p>
                </div>
            </div>
        );
    }
});

module.exports = Article;
