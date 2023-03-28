// tuples
// any array that has fix array length
// let gender: [ string, string] = ["Male", "Female"];
// gender[1] = "other";

// let admin: [number, string] = [1, "Ahsan"];
// admin.push("Ali");

//class

class Student {
    name: string;
    rollNo: number;
    constructor(n: string, r: number){
     this.name = n;
     this.rollNo = r;
    }
}

const student1 = new Student("Aqsa", 1234);
console.log(student1)
