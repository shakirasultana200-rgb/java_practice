const student = {
    name: "Shakira Sultana",
    dept: "CSE",
    semester: "3rd Year, 1st Semester",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(
    `${student.name} studies in ${student.dept}. She is in ${student.semester} and knows ${student.skills.join(", ")}.`
);