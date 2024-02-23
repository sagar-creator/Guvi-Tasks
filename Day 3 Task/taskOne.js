

let object1 = { name: "person 1", age: 5 };
let object2 = { age: 5, name: "person 1" };

const ref1 = JSON.stringify(object1, Object.keys(object1).sort());
    const ref2 = JSON.stringify(object2, Object.keys(object2).sort());

    if(ref1==ref2){
        console.log("TRUE: Both object having the same properties");
    }else{
        console.log("false");
    }
