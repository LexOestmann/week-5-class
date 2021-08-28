class Student{
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}` );
    }
}

let student1 = new Student('Tom', 'Sawyer', '6235555555', 'A');
let student2 = new Student('Sam', 'Smith', '4805555555', 'A');

student1.introduce();
student2.introduce();