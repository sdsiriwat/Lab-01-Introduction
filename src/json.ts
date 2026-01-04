// const object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
//
// console.log(object)
// console.log(object.name)
//
// const jsonStr = JSON.stringify(object);
// console.log("Object: ", object)
// console.log("json String: ", jsonStr)

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    gpa: number;
}

const checkStudentStatus = (student: Student): string => {
    if (student.gpa > 2.00) {
        return JSON.stringify(student);
    } else {
        return `คุณ ${student.firstName} พ้นสภาพ`;
    }
}

const student: Student = {
    firstName: "Somchai",
    lastName: "Jaidee",
    age: 20,
    gpa: 3.50
};

const result = checkStudentStatus(student);
console.log(result);