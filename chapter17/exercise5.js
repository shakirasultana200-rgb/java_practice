const student = {
    name: "Shakira",
    dept: "CSE"
};

const text = JSON.stringify(student);

console.log(text);

const back = JSON.parse(text);

console.log(back.name);