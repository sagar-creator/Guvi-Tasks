
console.log("*************************anonymous function *********************************");

const isPalindrome = function(a,b,c,d,e,f,g,h) {
    const input= [a,b,c,d,e,f,g,h];
    
    const reversedArray = input.map(str => str.split('').reverse().join(''));
    
    
      for(i=0;i<input.length;i++){
    
        if(input[i]==reversedArray[i]){
            console.log( input[i] ,"=",reversedArray[i]);
        }
      }}
    
      isPalindrome('hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam');


      console.log("*************************IIFE function*********************************");


      ((a,b,c,d,e,f,g,h)=> {
        const input= [a,b,c,d,e,f,g,h];
        
        const reversedArray = input.map(str => str.split('').reverse().join(''));
        
        
          for(i=0;i<input.length;i++){
        
            if(input[i]==reversedArray[i]){
                console.log( input[i] ,"=",reversedArray[i]);
            }
          }})('hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam');