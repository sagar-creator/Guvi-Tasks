console.log("*************************anonymous function *********************************");

const rotateArray = function (arr, k) {
        const n = arr.length;
        const rotation = k % n;
        
        // Use splice to rotate the array
        const rotatedArray = arr.splice(n - rotation).concat(arr);
        
        console.log(rotatedArray);
      }
      
      // Example usage:
      const originalArray = [1, 2, 3, 4, 5];
      const rotations = 2;
      
     rotateArray(originalArray, rotations);

    console.log("*************************IIFE function*********************************");

    ( (arr, k)=> {
        const n = arr.length;
        const rotation = k % n;
        
        // Use splice to rotate the array
        const rotatedArray = arr.splice(n - rotation).concat(arr);
        
        console.log(rotatedArray);
      })([1, 2, 3, 4, 5],2);
      