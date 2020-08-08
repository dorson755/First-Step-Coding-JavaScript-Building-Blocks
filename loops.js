
for (var i = 1; i <= 100; i=i+1){
    console.log(i);
  }
  
  
  for (i=1000; i <=1100; i=i+10) {
    console.log(i); 
  }
  
  /* For Loop that counts
  up by 20s from 1400 to 1600. With counter alongside a "-low" 
  when it's < 1500, a "-medium" when it's equal to 1500 
  and a "-high" when the counter is > 1500. 
  
  */
  for (var i=1400; i<=1600; i+=20){
  if (i < 1500){
  console.log(i + '-low');
  } else if (i === 1500){
  console.log(i + '-medium');
  } else {
  console.log(i + '-high');
  }
  }