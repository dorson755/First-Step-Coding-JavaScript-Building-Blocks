var songs = [
              { title: "Intro", artist: "The xx", seconds: 127 },
              { title: "Free Fallin'", artist: "Tom Petty", seconds: 256 },
              { title: "What You Know", artist: "Two Door Cinema Club", seconds: 191 },
              { title: "Closer", artist: "The Chainsmokers", seconds: 244 },
              { title: "Gooey", artist: "Glass Animals", seconds: 289 }
            ];
            
var titles = [];

var forOne = function justTitles(song){
 // console.log(song.title);
  titles.push(song.title);
  return titles;
};

songs.forEach(forOne);

console.log(titles)
