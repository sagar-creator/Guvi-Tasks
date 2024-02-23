
console.log("*************************anonymous function *********************************");


const findMedianSortedArrays = function (arr1, arr2) {
        const combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = combinedArray.length;
    
    if (length % 2 === 1) {
      const median = combinedArray[Math.floor(length / 2)];
      console.log("Median:", median); 
    } else {
      const middle1 = combinedArray[length / 2 - 1]; 
      const middle2 = combinedArray[length / 2];     
      const median = (middle1 + middle2) / 2;
      console.log("Median:", median);
      
    }}
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [6, 7, 8, 9, 10];
    
     findMedianSortedArrays(arr1, arr2);

    console.log("*************************IIFE function*********************************");

    ( (arr1, arr2) => {
        const combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = combinedArray.length;
    
    if (length % 2 === 1) {
      const median = combinedArray[Math.floor(length / 2)];
      console.log("Median:", median); 
    } else {
      const middle1 = combinedArray[length / 2 - 1]; 
      const middle2 = combinedArray[length / 2];     
      const median = (middle1 + middle2) / 2;
      console.log("Median:", median);
      
    }}) ([1, 2, 3, 4, 5],[6, 7, 8, 9, 10])