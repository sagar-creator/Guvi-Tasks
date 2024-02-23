console.log("*************************Arrow function*********************************");

let sumOf =  (a,b,c,d,e,f,g,h,i)=>{
    const num = [a,b,c,d,e,f,g,h,i];
    let sum = 0;
    for (i=0;i<num.length;i++){
    
        sum += num[i];
    }console.log(sum);
    }
    sumOf(1,2,3,4,5,6,7,8,9);