function flipSimulator(n){
    var headCount = 0;
    
    for (var i=0; i<n; i++){
      var flipResult = Math.random();
      if ( flipResult < 0.5 ){
        headCount++;
      }
    }
    
    return headCount;
  }
  
  
  console.log('head was flipped ' + flipSimulator(10000) + ' times.');