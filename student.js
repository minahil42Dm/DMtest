const students = [
    { id: 1, name: "Ali", age: 20, marks: 85 },
    { id: 2, name: "Sara", age: 21, marks: 92 },
    { id: 3, name: "Ahmed", age: 19, marks: 76 }
];

function getAllStudents() {
    return students;
}

function getStudentById(id) {
    return students.find(student => student.id === id);
}

function addStudent(name, age, marks) {
    const newStudent = {
        id: students.length + 1,
        name,
        age,
        marks
    };

    students.push(newStudent);
    return newStudent;
}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent
};