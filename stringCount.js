//Parameters - function will accept a string 

// @ts-ignore
function totalLetters(string){

//since we're returning a number, we need to keep track of what we have

var lettersSoFar = 0;

//iterate through each string

for (var i=0; i<string.length; i++){



lettersSoFar += string[i].length;

}

return lettersSoFar;

}

console.log(totalLetters(['adios', 'bye', 'ciao']));