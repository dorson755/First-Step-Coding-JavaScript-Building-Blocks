var inputs = [
    { title: "Intro", artist: "The xx", seconds: 127 },
    { title: "Free Fallin", artist: "Tom Petty", seconds: 256 },
    { title: "What You Know", artist: "Two Door Cinema Club", seconds: 191 },
    { title: "Closer", artist: "The Chainsmokers", seconds: 244 },
    { title: "Gooey", artist: "Glass Animals", seconds: 289 }
    ];
  
  // @ts-ignore
  function justTitles(array){
  // @ts-ignore
  var songs = [];
  
  // @ts-ignore
  array.forEach(function(songTitle){
    songs.push(songTitle.title);
  });
  // @ts-ignore
  return songs;
  }
  console.log(justTitles(inputs));