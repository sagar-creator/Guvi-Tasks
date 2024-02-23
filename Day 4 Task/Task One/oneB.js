console.log("*************************anonymous function *********************************");
let title = function  (a,b,c,d,e,f,g){
    const justiceLeague = [a,b,c,d,e,f,g];
    
    for(i=0;i<justiceLeague.length;i++) {
    
    const a = justiceLeague[i].charAt(0).toUpperCase()+ justiceLeague[i].slice(1);
    console.log(a);
    
    }
    }
    title("batman","superman","wonder woman","flash","cyborg", "aquaman","martian");



    console.log("*************************IIFE function*********************************");


(   (a,b,c,d,e,f,g) => {
    const justiceLeague = [a,b,c,d,e,f,g];
    
    for(i=0;i<justiceLeague.length;i++) {
    
    const a = justiceLeague[i].charAt(0).toUpperCase()+ justiceLeague[i].slice(1);
    console.log(a);
    
    }
    })("batman","superman","wonder woman","flash","cyborg", "aquaman","martian");