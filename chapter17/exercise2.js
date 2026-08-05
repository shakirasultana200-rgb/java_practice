const student = {
    name: "Shakira",
    dept: "CSE",
    semester: "8th",
    skills: ["HTML", "CSS", "JavaScript"],

    describe() {
        return `${this.name} is a ${this.dept} student in ${this.semester} semester.`;
    }
};

console.log(student.describe());