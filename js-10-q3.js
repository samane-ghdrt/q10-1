// According to your js10 session, write a code that shows why we shouldn't use var?
function myFunction() {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
  
    console.log('Outside the loop:', i); // This will log 5
  }
  
  myFunction();