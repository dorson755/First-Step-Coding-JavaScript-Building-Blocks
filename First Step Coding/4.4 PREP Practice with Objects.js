function tallest(mountains) {
  var tallestMountain;
  
  for (i = 0; i < mountains.length; i++) {
    if (!tallestMountain || mountains[i].elevation > tallestMountain.elevation) {
      tallestMountain = mountains[i];
    }
  }
      
  
  return tallestMountain.name;
}

var exampleMountains = [
  { name: 'Mount Everest', elevation: 29029 },
  { name: 'Mount Kilimanjaro', elevation: 19341 },
  { name: 'Mount Diablo', elevation: 3848 }
];

console.log(tallest(exampleMountains));
