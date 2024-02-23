class Person {
   
    constructor(name,age,location, email, phone,courseName,instituteName,Mode) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.location = location;
        this.courseName = courseName;
        this.instituteName = instituteName;
        this.Mode = Mode;
    }

    getDetails() {
        console.log(`Name: ${this.name} `);
        console.log(`Age: ${this.age} `);
        console.log(`Location: ${this.location} `);
        console.log(`Email: ${this.email} `);
        console.log(`Phone: ${this.phone} `);
        console.log(`Course: ${this.courseName} `);
        console.log(`Institute: ${this.instituteName} `);
        console.log(`Mode of Study: ${this.Mode} `);
    }

   
}

let Person1 = new Person('Sagar Parthasarathy','26','Chennai','sagarparthasarathy01@gmail.com','7639757419','Full Stack Developement','GUVI','ONLINE');

// console.log(student101);
// student101.getName();

Person1.getDetails();