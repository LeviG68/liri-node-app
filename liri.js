
require("dotenv").config();

var keys = required.("keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(key.twitter);