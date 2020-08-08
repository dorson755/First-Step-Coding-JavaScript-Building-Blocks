/* Recall the syntax and parts of a For Loop:
for ( INITIALIZATION; CONDITION; AFTERTHOUGHT ) {
  "BODY" OF THE FOR LOOP GOES HERE.
  THIS IS THE PART THAT GETS REPEATED.
}

Here's an example For Loop that will count up 
from 1 to 100 and log each number. Run this code 
and note the results before moving on. */
for (var i = 1; i <= 100; i=i+1){
  console.log(i);
}

/* Challenge 1: Define each of the below terms in
your own words.  

variable declaration: the instantiation or creating of a variable in a program. 

variable definition: telling the compiler where in memory to store a variable 

loop: a programming technique that allows one to run a piece of code as many times as necessary. 

iteration: a single run through of a loop.

counter variable: the variable in a loop that is used to control how long the loop runs. 

*/

/* Challenge 2: Write your own For Loop that counts
up by 10s from 1000 to 1100, logging the value in 
each iteration. */
for (var i = 1000; i <= 1100; i=i+10){
  console.log(i);
}
/* Challenge 3: Write your own For Loop that counts
up by 20s from 1400 to 1600. Use an if/else statement 
inside your loop to log the counter alongside a "-low" 
when it's < 1500, a "-medium" when it's equal to 1500 
and a "-high" when the counter is > 1500. 

So for example, your output from this loop 
should begin with:

1400-low
1420-low
1430-low...

and end with

...
1580-high
1600-high

Hint: Remember that you can "append" a number to a string
with a + operator like: console.log(i + '-high')
*/
for (var i = 1400; i <= 1600; i=i+20){
  console.log(i);
  if (i < 1500){
    console.log(i + '-low')
  }
  else if (i == 1500){
    console.log(i + '-medium')
  }
  else{
    console.log(i + '-high')
  }
}
