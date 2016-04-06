var React = require('react');
var Photo = require('./Photo.jsx');

var PhotoManager = React.createClass({

    getInitialState: function(){
        return { photos: [] };
    },

    componentDidMount: function(){

         $.ajax({
             type: "GET",
             url: this.props.route.address,
             dataType: "json",
             beforeSend: function(xhr){
                 xhr.setRequestHeader('Authorization', 'Client-ID a6112c62224e0cb');
             },
             success: function(json){
                 var imgs = [];

                 for(var img in json.data){
                     if(json.data[img].type){
                         imgs.push(json.data[img]);
                     }
                 }

                 this.setState({ photos: imgs });

         }.bind(this)});
    },

    render: function(){

        // Similar to the "ArticleManager" component, "PhotoManger" would ideally
        // receive an array of URLs, whether on the local file system or not.
        var createThumb = function(img){
            console.log(img);
            return <Photo key={img.id} image={img} />
        };

        return(
            <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                <h2><small>From <a href="http://www.imgur.com/" target="_blank">imgur</a>: The finest images the interwebs has to offer.</small></h2>
                    <div className="row">
                    {this.state.photos.map(createThumb)}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PhotoManager;
