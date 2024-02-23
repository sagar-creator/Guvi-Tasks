console.log("*************************anonymous function *********************************");

const removeDuplicate = function(a,b,c,d,e,f,g,h,i,j){
    const inputArray = [a,b,c,d,e,f,g,h,i,j];
    
    
    const uniqueArray = [...new Set(inputArray)];
    
    console.log(uniqueArray);
    
    }
    removeDuplicate(1,2,3,4,5,1,2,3,4,5);


    console.log("*************************IIFE function*********************************");

    ((a,b,c,d,e,f,g,h,i,j)=>{
        const inputArray = [a,b,c,d,e,f,g,h,i,j];
        
        
        const uniqueArray = [...new Set(inputArray)];
        
        console.log(uniqueArray);
        
        })(1,2,3,4,5,1,2,3,4,5);