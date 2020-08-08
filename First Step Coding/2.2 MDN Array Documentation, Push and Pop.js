// Create a new songs array.
var songs = [];

for(var i=0;i<4;i++) {
  var answer = prompt('Please enter one of your favorite songs')
songs.push(answer);

 
} 
console.log (i)
for (i = 0; i < songs.length; i++) {
	console.log (songs[i] + ' is one of your favorite songs');
}
// this creates the variable and  reports the popped item 
{
poppedItem = songs.pop()
console.log ((poppedItem) + ' is the popped item');
}
// log the length of the array
{
  console.log ((songs.length) + ' is the length of your list');
}

