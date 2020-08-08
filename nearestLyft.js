var lyftUsers = [
    {
    id: 101,
    firstName: 'Jacqueline',
    metersFromUser: 5193
    },
    {
      id:204,
      firstName: "Jane",
      metersFromUser: 245
    },
    {
      id:33,
      firstName: 'Kat',
      metersFromUser: 78
    },
    {
      id: 443,
      firstName: 'Sutton',
      metersFromUser: 8331
    }
    ];


// @ts-ignore
function nearestDriver(array){
  //initialize all variables - distance, array

  var closestSoFar = lyftUsers[0];

  // @ts-ignore
  for(i=0; i<lyftUsers.length; i++){
    // @ts-ignore
    if(lyftUsers[i].metersFromUser < closestSoFar.metersFromUser){
      // @ts-ignore
      closestSoFar = lyftUsers[i]  ;
    }
  }
  return closestSoFar.id;

}
console.log(nearestDriver(lyftUsers));