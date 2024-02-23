class UberPrice {
   
    constructor(name, distance) {
        this.name = name;
        this.distance = distance ;
        
    }
    getName() { 
        return this.name;
    }

//17 per km
    getPrice() { 
        return this.distance * 17;
    }
//3 mins per km
    getTime() {
        return this.distance * 3;
    }
}

let Uber = new UberPrice('Sagar','25', );




console.log(`${Uber.getName()} Your Uber Price is : ${Uber.getPrice()} rupees`);
console.log(`time to reach the destination: ${Uber.getTime()} minutes`);