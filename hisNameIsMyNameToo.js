
var myPerson = { firstName: 'Dorson', lastName: 'Williams', eyeColor: 'brown' };



console.log("This person\'s name is  " + myPerson.firstName + '  ' + myPerson.eyeColor); 
console.log("This person\'s name is  " + myPerson['lastName']);



var propName = 'eyeColor';
// @ts-ignore
console.log('This person\'s first name is ' + propName + ' is ' + myPerson[propName]);



myPerson['eyeColor'] = 'hazel';



myPerson.lastName = 'jingleheimer';


console.log(myPerson);