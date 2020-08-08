// @ts-ignore
function justTitles(songs){
    // @ts-ignore
    return songs.map(function(song){
      return song.title;
    });
  }
  
  var exampleInput = [
                { title: "Intro", artist: "The xx", minutes: 127 },
                { title: "Free Fallin'", artist: "Tom Petty", minutes: 256 },
                { title: "What You Know", artist: "Two Door Cinema Club", minutes: 191 },
                { title: "Closer", artist: "The Chainsmokers", minutes: 244 },
                { title: "Gooey", artist: "Glass Animals", minutes: 289 }
              ];
  console.log(justTitles(exampleInput));