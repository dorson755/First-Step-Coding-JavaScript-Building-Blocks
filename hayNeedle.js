// @ts-ignore
function findNeedle(stringArray) {
    // loop through the array
    // @ts-ignore
    for (i = 0; i < stringArray.length; i++) {
      /* if the item in the array is a needle, 
      return the index. If not, do nothing...*/
      // @ts-ignore
      if (stringArray[i] === "needle") {
        // @ts-ignore
        return i;
      }
    }
  }
  
  // @ts-ignore
  function random20to100(min, max){
      // 
      min = Math.ceil(20);
      max = Math.floor(100);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }    
  
  // @ts-ignore
  function random100to1000(min, max){
      // 
      min = Math.ceil(100);
      max = Math.floor(1000);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  // @ts-ignore
  function randomAlphabetLetter(min, max) {
      //
      var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      min = Math.ceil(0);
      max = Math.floor(25);
      var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      return letters[randomInt];
      }
  
  // @ts-ignore
  function randomAnimal(min, max) {
      //
      var animals = ['lion','tiger','bear', 'wolf'];
      min = Math.ceil(0);
      max = Math.floor(5);
      var randomAnimals = Math.floor(Math.random() * (max - min + 1)) + min;
      return animals[randomAnimals];
      }