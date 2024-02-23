 
 
 console.log("*************************anonymous function *********************************");
 
 const isPrime = function (n) {
    if (n <= 1) return ;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return  ;
      }
    }
    console.log(n);
  }
  
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for (let i = 0; i < num.length; i++) {
    if (isPrime(num[i])) {
      console.log(num[i]);
    }
  }

  console.log("*************************IIFE function*********************************");

  (function() {
    const isPrime = function (n) {
      if (n <= 1) return;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return;
        }
      }
      console.log(n);
    }
  
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    for (let i = 0; i < num.length; i++) {
      (function(index) {
        if (isPrime(num[index])) {
          console.log(num[index]);
        }
      })(i);
    }
  })();
  