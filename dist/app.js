"use strict";
// tuples
// any array that has fix array length
// let gender: [ string, string] = ["Male", "Female"];
// gender[1] = "other";
// let admin: [number, string] = [1, "Ahsan"];
// admin.push("Ali");
//class
// class Student {
//     name: string;
//     rollNo: number;
//     constructor(n: string, r: number){
//      this.name = n;
//      this.rollNo = r;
//     }
// }
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.skills = [];
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
}
const student1 = new Student("Aqsa", 1234);
// student1.skills.push("Javascript");
student1.addSkill("Javascript");
// student1.rollNo = 567
console.log(student1);
const student2 = new Student("Tasmia", 1235);
student2.addSkill("Typescript");
console.log(student2);
//# sourceMappingURL=app.js.map