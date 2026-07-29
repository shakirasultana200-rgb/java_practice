const students = [
    { name: "Rahim", cgpa: 3.7 },
    { name: "Karim", cgpa: 3.2 },
    { name: "Mim", cgpa: 3.9 },
    { name: "Nusrat", cgpa: 3.4 }
];

const topperNames = students
    .filter(student => student.cgpa >= 3.5)
    .map(student => student.name);

console.log(topperNames);