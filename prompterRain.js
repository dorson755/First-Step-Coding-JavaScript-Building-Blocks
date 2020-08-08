// 
// @ts-ignore
var answer = prompt('How many inches of rain this week?');

if (answer < 0) {
  console.log( answer + ' That is not possible');
  
}
else if (answer <= 0) {
  console.log( answer + ' I hope we are not in drought');
}
else if (answer < 4) {
  console.log( answer + ' I should buy a raincoat');
} 
else if (answer > 4) {
  console.log(answer + ' I really need a boat');
}
else {
  console.log(answer);
}