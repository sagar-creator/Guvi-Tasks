console.log("*************************Arrow function *********************************");

const oddNum =  (a,b,c,d,e,f,g,h,i,j,l,m,n)=>{

    const input = [a,b,c,d,e,f,g,h,i,j,l,m,n];
    
    
    for(i=0;i<input.length;i++){
    if(input[i]%2!=0){
        console.log(input[i]);
    }else{
        console.log('');
    }
    
    }}
    
    oddNum(1,2,3,4,5,6,7,8,9,10,11,12,13);