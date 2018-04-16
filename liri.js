
require("dotenv").config();

//intalize npm pakcage
var Twitter = require('twitter'); 
var Spotify = require('node-spotify-api');
var request = require ('request');



//initialize other pages to import
var keys = require("./keys.js");
var fs = require('fs');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var firstCommand = process.argv[2];
var secondCommand = process.argv[3];
// console.log(command);


// if(command === "my-tweets"){
//   // console.log(keys.twitter);
  
//   var params = {screen_name: 'realDonaldTrump'};
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       for (var i = 0; i < tweets.length; i++){
//         console.log(tweets[i].text+"\n"+tweets[i].created_at+"\n");
//       } 
      
//       // console.log(tweets);

function spotifySong(song) {
  spotify.search({ type: 'track', query: song, limit: 10 }, function(err, data) {

      var artist = data.tracks.items[0].artists[0].name;
      var song = data.tracks.items[0].name;
      var link = data.tracks.items[0].preview_url;
      var album = data.tracks.items[0].album.name;

      if (err) {
        return console.log('Error occurred: ' + err);
      } else {
          console.log(`
            ${artist}
            ${song}
            ${link}
            ${album}
            `);
      }
  });
};
    
//OMDB return
function movies(movie) {
    request.get('http://www.omdbapi.com/?apikey=trilogy&t=' + movie, function (error, response) {
        
        var resp = JSON.parse(response.body);
        var title = resp.Title;
        var year = resp.Year;
        var imdbRating = resp.imdbRating;
        var tomRating = resp.Ratings[1].Value;
        var lang = resp.Language;
        var plot = resp.Plot;
        var actors = resp.Actors;
            
        if (error) {
            console.log('error:', error); // Print the error if one occurred
        } else {
            console.log(`
              ${"Title: " + title}
              ${"Release Year: " + year}
              ${"IMDB Rating: " + imdbRating}
              ${"Rotten Tomatoes Rating: " + tomRating}
              ${"Language: " + lang}
              ${"Plot: " + plot}
              ${"Actors: " + actors}
              `);
        }
    })
}
    
    
//Do what it says function
function doIt(){
    fs.readFile("./random.txt", "utf8", (err, data)=> {
        if (err) {
            throw err
        }
        else if (data.includes("spotify")) {
            var content = data.split(",");
            spotifySong(content[1]);
        }
        
    })
};   

//Logic for commands
// console.log(firstCommand);
// console.log(secondCommand);
    
if (firstCommand === "my-tweets") {
    twitterFeed();
} 
else if ((firstCommand === "spotify-this-song") && (secondCommand === undefined)) {
    spotifySong("Ace of Base: The Sign");
}
else if (firstCommand === "spotify-this-song") {
    spotifySong(secondInput);
}
else if (firstCommand === "movie-this" && secondCommand === undefined) {
    console.log(`
        ${"If you haven't watched \"Mr. Nobody,\" then you should:"}
        ${"http://www.imdb.com/title/tt0485947/"}
        ${"It's on Netflix!"} `)
}
else if (firstCommand === "movie-this") {
    movies(secondCommand);
}
else if (firstCommand === "do-what-it-says") {
    doIt();
}