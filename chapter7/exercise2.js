const student = {
    name: "Shakira Sultana",
    dept: "CSE",
    semester: "3rd Year, 1st Semester",

    describe() {
        return `${this.name} is a student of ${this.dept} and is currently in ${this.semester}.`;
    }
};

console.log(student.describe());