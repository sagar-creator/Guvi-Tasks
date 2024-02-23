console.log("*************************anonymous function *********************************");
const oddNum = function (a,b,c,d,e,f,g,h,i,j,l,m,n){

const input = [a,b,c,d,e,f,g,h,i,j,l,m,n];


for(i=0;i<input.length;i++){
if(input[i]%2!=0){
    console.log(input[i]);
}else{
    console.log('');
}

}}

oddNum(1,2,3,4,5,6,7,8,9,10,11,12,13);

console.log("*************************IIFE function*********************************");


((a,b,c,d,e,f,g,h,i,j,l,m,n) => {

    const input = [a,b,c,d,e,f,g,h,i,j,l,m,n];
    
    
    for(i=0;i<input.length;i++){
    if(input[i]%2!=0){
        console.log(input[i]);
    }else{
        console.log('');
    }
    
    }})(1,2,3,4,5,6,7,8,9,10,11,12,13);