var exampleData = [ 
  {id: 101, firstName: 'Jenny', metersFromUser: 5193},
  {id: 204, firstName: 'Nigel', metersFromUser: 245 },
  {id: 33,  firstName: 'Andreas', metersFromUser: 78},
  {id: 443, firstName: 'Boris', metersFromUser: 8331}
];


function nearestDriver(drivers) {
  var nearestDriver;
  
  for (i = 0; i < drivers.length; i++) {
    if (!nearestDriver || drivers[i].metersFromUser < nearestDriver.metersFromUser) {
      nearestDriver = drivers[i];
    }
  }
      
  
  return nearestDriver.id;
}


console.log(nearestDriver(exampleData));
