let test = require("dotenv").config();
// console.log(test);
const Twitter = require('twitter'); 
const Spotify = require('node-spotify-api');

var spotifty = new Spotify({
  spotify_id: process.env.SPOTIFY_ID,
  spotify_secret: process.env.SPOTIFY_SECRET
)};


// var client = new Twitter({
//   consumer_key: 'Dp8G54526WSTrAy7MouhJ7cd3',
//   consumer_secret: 'WUZKobncRGcNwlDVUByMr5zDCA9NIyanxnYTgDsKYyyjOtybyE',
//   access_token_key: '983415768464277504-QFMWqxNh1SOxqqjxuUSgvU3ronMKvND',
//   access_token_secret: 'YVijnmlza9uNfc7Gfz7MczzAJ0TGdVa6Zsxzj7j6xpJXJ'
// });
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
console.log(client.consumer_secret);
module.exports = client;