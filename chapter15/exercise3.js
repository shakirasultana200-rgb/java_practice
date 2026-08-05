const students = [
    { name: "Rahim", cgpa: 3.50 },
    { name: "Karim", cgpa: 3.90 },
    { name: "Nusrat", cgpa: 3.70 }
];

students.sort((a, b) => b.cgpa - a.cgpa);

students.forEach(student => {
    console.log(student.name, student.cgpa);
});