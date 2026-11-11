const {
    getAllStudents,
    getStudentById,
    addStudent
} = require("./students");

const {
    calculateAverage,
    getGrade
} = require("./calculator");

console.log("===== STUDENT MANAGEMENT SYSTEM =====");

console.log("\nAll Students:");

const students = getAllStudents();

students.forEach(student => {
    console.log(
        `${student.name} | Age: ${student.age} | Marks: ${student.marks}`
    );
});

console.log("\nSearching for Student ID 2:");

console.log(getStudentById(2));

console.log("\nAdding a New Student:");

const newStudent = addStudent("Minahil", 20, 95);

console.log(newStudent);

console.log("\nCalculating Average:");

const marks = students.map(student => student.marks);

const average = calculateAverage(marks);

console.log("Average Marks:", average);

console.log("Grade:", getGrade(average));