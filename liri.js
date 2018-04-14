
require("dotenv").config();
var Twitter = require('twitter');

// console.log(process.env.TWITTER_CONSUMER_KEY);
var keys = require("./keys.js");
//console.log(keys);
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var command = process.argv[2];
// console.log(command);

if(command === "my-tweets"){
  // console.log(keys.twitter);
  
  var params = {screen_name: 'realDonaldTrump'};
  keys.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text+"\n");
      } 
      
      // console.log(tweets);
    }
    else {
      console.log(error);
    }
  });
}else if(command === "spotify-this-song"){
   
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
}else if (command === "movie-this"){

}else if (command === "do-what-it-says"){

}
