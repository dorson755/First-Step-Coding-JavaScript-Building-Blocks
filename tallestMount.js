// @ts-ignore
function tallest(cats){
    // Keep track of the tallest mountain we've seen so far.
    var tallestSoFar = cats[0];
    
    // Loop over all of the mountains
    for (var i=1; i<cats.length; i++){
      // If the current mountain is taller than the tallestSoFar, 
      //    then update tallestSoFar to point to the current mountain.
      if (cats[i].elevation > tallestSoFar.elevation){
        tallestSoFar = cats[i];
      }  
    }
    // Return the name of the tallest mountain we encountered.
    return tallestSoFar.name;
  }
  
  var exampleMountains = [
    { name: 'Mount Everest', elevation: 29029 },
    { name: 'Mount Kilimanjaro', elevation: 19341 },
    { name: 'Mount Diablo', elevation: 3848 }
  ];
  
  console.log(tallest(exampleMountains)); // should log 'Mount Everest'